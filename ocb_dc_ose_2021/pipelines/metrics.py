import aprl.pipeline

import ocb_dc_ose_2021.mods.cmems_get as cmems_get
import ocb_dc_ose_2021.mods.interp_on_track as interp_on_track
import ocb_dc_ose_2021.mods.lambdax as lambdax
import ocb_dc_ose_2021.mods.mu as mu
import ocb_dc_ose_2021.mods.prepare_track as prepare_track

dataset_id_cfg = cmems_get.cfg.dataset_id
regex_cfg = cmems_get.cfg.regex
_01_dl_track = cmems_get.cfg(
    dataset_id=dataset_id_cfg(sat="${...params.sat}"),
    regex=regex_cfg(
        min_time="${...params.min_time}",
        max_time="${...params.max_time}",
    ),
    download_dir="data/downloads/ref/${.sat}",
)

input_paths_cfg = prepare_track.input_paths
preprocess_cfg = prepare_track.preprocess
_02_prepare_track = prepare_track.cfg(
    input_paths=input_paths_cfg(
        pathname="${..._01_dl_track.download_dir}",
    ),
    preprocess=preprocess_cfg(
        min_lon="${...params.min_lon}",
        max_lon="${...params.max_lon}",
        min_lat="${...params.min_lat}",
        max_lat="${...params.max_lat}",
        min_time="${...params.min_time}",
        max_time="${...params.max_time}",
    ),
    output_path="data/prepared/ref/${.._01_dl_track.sat}.nc",
)


preprocess_map_cfg = interp_on_track.cfg.preprocess_grid
_03_interp_on_track = interp_on_track.cfg(
    grid_paths="${...params.study_path}",
    preprocess_grid=preprocess_map_cfg(ssh_var="${...params.study_var}"),
    track_paths="${.._02_filter_and_merge.output_path}",
    output_path="data/prepared/method_outputs/${...params.method}_on_track.nc",
)

pp_lx_study_cfg = lambdax.cfg.preprocess_study
pp_lx_ref_cfg = lambdax.cfg.preprocess_ref
_04_1_lambdax = lambdax.cfg(
    ref_paths="${.._02_filter_and_merge.output_path}",
    study_paths="${.._03_interp_on_track.output_path}",
    output_lambdax_path="data/metrics/lambdax_${...params.method}.json",
    output_psd_path="data/prepared/method_outputs/psd_${...params.method}.nc",
    preprocess_study=pp_lx_study_cfg(ssh_var="${.._03_interp_on_track.grid_var}"),
    preprocess_ref=pp_lx_ref_cfg(ssh_var="ssh"),
)

pp_mu_study_cfg = mu.cfg.preprocess_study
pp_mu_ref_cfg = mu.cfg.preprocess_ref
_04_2_mu = mu.cfg(
    ref_paths="${.._02_filter_and_merge.output_path}",
    study_paths="${.._03_interp_on_track.output_path}",
    output_path="data/metrics/mu_${...params.method}.json",
    preprocess_study=pp_mu_study_cfg(ssh_var="${.._03_interp_on_track.grid_var}"),
    preprocess_ref=pp_mu_ref_cfg(ssh_var="ssh"),
)

stages = {
    "_01_dl_track": _01_dl_track,
    "_02_prepare_track_cfg": _02_prepare_track,
    "_03_interp_on_track": _03_interp_on_track,
    "_04_1_lambdax": _04_1_lambdax,
    "_04_2_mu": _04_2_mu,
}


params = dict(
    method="default",
    study_path="data/downloads/method_outputs/${.method}.nc",
    study_var="ssh",
    sat="c2",
    min_time="2017-01-01",
    max_time="2017-12-31",
    min_lon=-65.0,
    max_lon=-55.0,
    min_lat=33.0,
    max_lat=43.0,
)
pipeline, recipe, params = aprl.pipeline.register(
    name="dc_ose_2021_alongtrack_metrics", stages=stages, params=params
)