Search.setIndex({"docnames": ["installation", "intro", "ocb_dc_ose_2021_data", "ocb_dc_ose_2021_global", "ocb_dc_ose_2021_oi"], "filenames": ["installation.md", "intro.md", "ocb_dc_ose_2021_data.md", "ocb_dc_ose_2021_global.md", "ocb_dc_ose_2021_oi.md"], "titles": ["Setup", "OceanBench DataChallenge", "Data Access for the Oceanbench v2 datachallenge demo", "Reusing the datachallenge implementation for exploring global usecase with different constellation", "Participating to the data challenge: applying, evaluating and submitting a method"], "terms": {"prerequisit": 0, "mamba": 0, "merg": 0, "pip": 0, "ipython": 0, "jupyt": 0, "The": [0, 1, 2], "requir": [0, 2], "depend": 0, "you": [0, 1], "usag": 0, "mai": 0, "full": 0, "have": 0, "therefor": 0, "been": 0, "split": 0, "differ": [0, 1], "file": [0, 2, 3, 4], "env": [0, 2], "folder": 0, "repositori": 0, "quentinf00": [0, 1, 2, 3, 4], "ocb": [0, 1, 3], "dc": [0, 1, 2, 4], "os": [0, 1, 2, 4], "2021": [0, 1, 2, 4], "git": [0, 1, 2, 4], "reli": 0, "compil": 0, "multipl": 0, "one": [0, 2, 3], "suit": [0, 1], "your": [0, 2], "below": 0, "an": [0, 1], "exampl": [0, 1], "wget": [0, 3, 4], "nc": [0, 2, 3, 4], "http": [0, 1, 2, 3], "raw": [0, 3, 4], "githubusercont": [0, 3, 4], "com": [0, 1, 2, 3, 4], "doc": [0, 3], "base": [0, 2], "dvc": [0, 1, 2, 4], "s3": [0, 4], "yaml": [0, 2, 3], "quiet": 0, "n": [0, 2], "f": [0, 4], "In": 0, "first": [0, 2, 3], "cell": 0, "run": [0, 3, 4], "q": [0, 2], "condacolab": 0, "import": [0, 2, 3, 4], "install_mambaforg": 0, "If": [0, 2], "don": 0, "t": [0, 3], "go": 0, "here": [0, 1, 4], "login": 0, "us": [0, 1, 3], "cli": [0, 1, 2], "copernicusmarin": [0, 2], "can": [0, 1], "authentif": 0, "configur": [0, 1], "set": 0, "variabl": [0, 2], "aws_endpoint_url": 0, "aws_default_region": 0, "aws_secret_access_kei": 0, "aws_access_key_id": 0, "we": 1, "provid": [1, 2], "document": 1, "notebook": 1, "associ": 1, "github": [1, 2, 4], "thi": 1, "aim": 1, "lai": 1, "foundat": 1, "build": 1, "ecosystem": 1, "facilit": 1, "develop": 1, "applic": 1, "ocean": [1, 2], "observ": [1, 2], "scienc": 1, "work": 1, "i": [1, 2], "built": 1, "upon": 1, "exist": [1, 2], "should": 1, "check": 1, "out": 1, "data": 1, "challeng": 1, "well": 1, "thought": 1, "evalu": 1, "case": 1, "input": [1, 3], "download": [1, 4], "instruct": 1, "metric": [1, 3], "code": 1, "method": [1, 3], "tool": 1, "ml": 1, "hydra": [1, 2, 3], "zen": 1, "python": 1, "workflow": 1, "share": 1, "adapt": 1, "config": [1, 2], "integr": 1, "easi": 1, "comput": [1, 2], "local": [1, 2, 3], "cluster": 1, "log": 1, "version": 1, "pipelin": 1, "paramet": [1, 2], "artefact": 1, "descript": 1, "orchestr": 1, "make": 1, "through": 1, "follow": 1, "5": [1, 2, 3, 4], "min": [1, 2], "walkthrough": 1, "video": 1, "demonstr": 1, "new": 1, "brought": 1, "implement": 1, "access": [1, 4], "reproduct": [1, 2], "autom": 1, "leaderboard": 1, "updat": 1, "usecas": 1, "scale": [1, 3, 4], "oper": 1, "idea": 1, "project": 1, "defin": 1, "guidelin": 1, "so": 1, "actor": 1, "add": [1, 4], "brick": 1, "while": [1, 2], "good": 1, "interoper": 1, "exit": 1, "compon": 1, "clarifi": 1, "how": 1, "do": [1, 2], "To": 1, "continu": 1, "setup": 1, "v2": [1, 4], "demo": [1, 4], "particip": 1, "appli": [1, 2], "submit": 1, "param": [2, 3, 4], "sat": [2, 3], "j2g": [2, 3], "2024": [2, 3, 4], "04": [2, 3, 4], "10": [2, 3, 4], "09": [2, 3, 4], "13": [2, 3, 4], "06": [2, 3, 4], "697": [], "aprl": [2, 3, 4], "appareil": [2, 3, 4], "info": [2, 3, 4], "start": [2, 3, 4], "part": [2, 3, 4], "_01_dl_track": [2, 3], "fetch": [2, 3], "catalog": [2, 3], "0": [2, 3, 4], "3": [2, 3, 4], "00": [2, 3, 4], "": [2, 3, 4], "33": [2, 3, 4], "1": [2, 3, 4], "26": [2, 3, 4], "49": [2, 3, 4], "100": [2, 3, 4], "4": [2, 3, 4], "50": [2, 3, 4], "10t09": 2, "20z": [], "dataset": [2, 3], "wa": [2, 3], "specifi": [2, 3], "latest": [2, 3], "select": [2, 3], "202112": [2, 3], "20": [2, 3, 4], "810": [], "copernicus_marine_root_logg": [2, 3], "default": [2, 3], "servic": [2, 3], "origin": [2, 3, 4], "66": [2, 3, 4], "2": [2, 3, 4], "15": [2, 3, 4], "16": [2, 3, 4], "34": [3, 4], "29": [2, 3, 4], "6": [2, 3, 4], "42": [3, 4], "03": [2, 3, 4], "65": [2, 3, 4], "15it": 3, "37": [2, 3, 4], "127": 3, "done": [2, 3, 4], "_02_prepare_track": [2, 3], "128": 3, "ocb_dc_ose_2021": [2, 3, 4], "mod": [2, 3, 4], "prepare_track": [2, 3], "44": [2, 3, 4], "429": [], "461": [], "0m": [2, 3, 4], "xarrai": [2, 3, 4], "xr": [2, 3, 4], "d": [2, 3], "open_mfdataset": [2, 3, 4], "combin": [2, 3, 4], "nest": [2, 3, 4], "concat_dim": [2, 3, 4], "time": [2, 3, 4], "lt": [2, 3, 4], "gt": 2, "size": 2, "450kb": 2, "dimens": 2, "14060": 2, "coordin": 2, "datetime64": 2, "112kb": 2, "2017": [2, 3, 4], "07": [2, 3, 4], "11t14": 2, "55": [2, 3, 4], "772069888": 2, "lon": [2, 3, 4], "float64": 2, "dask": 2, "arrai": 2, "chunksiz": 2, "meta": 2, "np": [2, 3, 4], "ndarrai": 2, "lat": [2, 3, 4], "ssh": [2, 3, 4], "attribut": 2, "12": [2, 3, 4], "convent": 2, "cf": 2, "metadata_convent": 2, "unidata": 2, "discoveri": 2, "v1": 2, "cdm_data_typ": 2, "swath": 2, "comment": 2, "sea": 2, "surfac": 2, "height": [2, 3], "measur": 2, "altimet": 2, "contact": 2, "servicedesk": 2, "cmem": 2, "mercat": 2, "eu": [2, 4], "creator_email": 2, "summari": 2, "ssalto": 2, "duac": 2, "delai": 2, "level": 2, "su": 2, "time_coverage_dur": 2, "p12h19m2": 2, "66746": 2, "time_coverage_end": 2, "11t23": 2, "30": [2, 3, 4], "27z": 2, "time_coverage_resolut": 2, "p1": 2, "time_coverage_start": 2, "11t11": 2, "11": [2, 3, 4], "25z": 2, "titl": 2, "dt": [2, 3], "ostm": 2, "jason": 2, "long": 2, "repeat": 2, "orbit": 2, "global": [1, 2], "datasetdimens": 2, "14060coordin": 2, "x27": 2, "45": [2, 3, 4], "769939968": 2, "46": [2, 3, 4], "767809792": 2, "14t02": 2, "254863104": 2, "27": [2, 3, 4], "252733184": 2, "28": [2, 3, 4], "250603008": 2, "dtype": 2, "float64dask": 2, "unit": 2, "degrees_eaststandard_nam": 2, "longitudelong_nam": 2, "longitud": 2, "chunk": 2, "byte": 2, "109": [2, 3, 4], "84": [2, 3, 4], "kib": 2, "shape": 2, "graph": 2, "layer": 2, "type": 2, "numpi": [2, 3, 4], "degrees_northstandard_nam": 2, "latitudelong_nam": 2, "latitud": 2, "mstandard_nam": 2, "sea_surface_heightlong_nam": 2, "index": 2, "timepandasindexpandasindex": 2, "datetimeindex": 2, "14": [2, 3, 4], "47": [2, 3, 4], "765679872": 2, "48": [2, 3, 4], "763549952": 2, "761420032": 2, "759289856": 2, "51": [2, 3, 4], "757159936": 2, "52": [2, 3, 4], "755030016": 2, "53": [2, 3, 4], "752900096": 2, "01": [2, 3, 4], "56": [2, 3, 4], "35": [2, 3, 4], "469000960": 2, "36": [2, 3, 4], "466871040": 2, "464741120": 2, "38": [2, 3, 4], "462611200": 2, "39": [2, 3, 4], "460480768": 2, "40": [2, 3, 4], "458350848": 2, "41": [2, 3, 4], "456220928": 2, "02": [2, 3, 4], "name": [2, 3, 4], "length": [2, 3, 4], "freq": [2, 3], "none": [2, 4], "6metadata_convent": 2, "0cdm_data_typ": 2, "swathcom": 2, "referenc": 2, "1993": 2, "2012": 2, "period": 2, "addit": 2, "correct": 2, "propos": 2, "sla": 2, "alreadi": 2, "dac": 2, "ocean_tid": 2, "lwe": 2, "uncorrect": 2, "from": [2, 3, 4], "product": 2, "eucreator_email": 2, "eucreator_nam": 2, "themat": 2, "assembli": 2, "centercreator_url": 2, "marin": 2, "copernicu": 2, "eudate_cr": 2, "09t05": 2, "03zdate_issu": 2, "03zdate_modifi": 2, "03zgeospatial_lat_max": 2, "147938geospatial_lat_min": 2, "1426geospatial_lat_resolut": 2, "02496149999999986geospatial_lat_unit": 2, "degrees_northgeospatial_lon_max": 2, "359": 2, "98487geospatial_lon_min": 2, "000499geospatial_lon_resolut": 2, "02909299999999604geospatial_lon_unit": 2, "degrees_eastgeospatial_vertical_max": 2, "0geospatial_vertical_min": 2, "0geospatial_vertical_posit": 2, "downgeospatial_vertical_resolut": 2, "pointgeospatial_vertical_unit": 2, "mhistori": 2, "03z": 2, "creationinstitut": 2, "cl": 2, "cneskeyword": 2, "topographi": 2, "heightkeywords_vocabulari": 2, "netcdf": 2, "coard": 2, "climat": 2, "forecast": 2, "standard": 2, "nameslicens": 2, "web": 2, "commit": [2, 4], "licenc": 2, "phpplatform": 2, "orbitprocessing_level": 2, "l3product_vers": 2, "vdec2021project": 2, "environ": 2, "monitor": 2, "refer": 2, "eusoftware_vers": 2, "7": [2, 3, 4], "0_duacs_dt2021_baselinesourc": 2, "measurementsssalto_duacs_com": 2, "mission": 2, "inter": 2, "calibr": 2, "topex": 2, "poseidon": 2, "between": 2, "2002": 2, "23": [2, 3, 4], "24": [2, 3, 4], "2008": 2, "18": [2, 3, 4], "19": [2, 3, 4], "2016": [2, 3], "25": [2, 3, 4], "sinc": 2, "standard_name_vocabulari": 2, "metadata": 2, "tabl": 2, "v37summari": 2, "altimetri": 2, "over": 2, "66746stime_coverage_end": 2, "27ztime_coverage_resolut": 2, "p1stime_coverage_start": 2, "25ztitl": 2, "along": 2, "track": 2, "l3": 2, "2d": [2, 3], "map": 2, "bin_siz": [2, 3, 4], "sel": [2, 3, 4], "08": [2, 3, 4], "assign": [2, 3, 4], "load": [2, 3, 4], "drop_var": [2, 3, 4], "to_datafram": [2, 3, 4], "groupbi": [2, 3, 4], "mean": [2, 3, 4], "to_xarrai": [2, 3, 4], "plot": [2, 4], "matplotlib": [2, 3, 4], "collect": [2, 4], "quadmesh": [2, 3, 4], "0x7f6efa298c10": [], "multirun": 2, "true": [2, 3], "948": [], "launch": [2, 3], "job": [2, 3], "alg": [2, 3], "041": [], "042": 3, "h2ag": [2, 3], "132": 3, "223": 3, "224": 3, "j2n": [2, 3], "313": 3, "j3": [2, 3], "405": [], "s3a": [2, 3], "596": [], "597": 3, "store": 2, "repo": 2, "url": [2, 4], "conveni": 2, "dc_repo": 2, "pretti": 2, "print": [2, 3, 4], "l": 2, "r": 2, "tree": 2, "fromfil": 2, "clone": [2, 4], "obj": [2, 4], "count": [2, 4], "448": [], "08obj": [], "compress": [2, 4], "object": 2, "227": 3, "34m": 2, "34mmetric": 2, "lambdax_4dvarnet": 2, "json": [2, 3, 4], "lambdax_duac": 2, "mu_4dvarnet": 2, "mu_duac": 2, "34mprepar": 2, "34minput": 2, "34mmethod_output": 2, "4dvarnet_on_track": 2, "duacs_on_track": 2, "psd_4dvarnet": 2, "psd_duac": 2, "34mref": 2, "c2": [2, 3], "directori": 2, "get": [2, 4], "11mb": 2, "353305": 2, "3mb": 2, "01t22": 2, "975349760": 2, "2018": [2, 3], "78000": 2, "p23h18m50": 2, "723265": 2, "01t23": 2, "21z": 2, "01t00": 2, "30z": 2, "altika": 2, "drift": 2, "phase": 2, "al": 2, "353305coordin": 2, "031349760": 2, "21": [2, 3, 4], "087350016": 2, "31t14": 2, "678193152": 2, "678193408": 2, "70": [2, 3, 4], "mib": 2, "673": 2, "86207": 2, "22": [2, 3, 4], "143350016": 2, "199350016": 2, "255349760": 2, "311349760": 2, "367349760": 2, "423349760": 2, "479349760": 2, "31": [2, 3, 4], "05": [2, 3, 4], "08t13": 2, "36zdate_issu": 2, "36zdate_modifi": 2, "36zgeospatial_lat_max": 2, "81": [2, 3, 4], "509018geospatial_lat_min": 2, "77": [2, 3, 4], "038071geospatial_lat_resolut": 2, "052618500000001234geospatial_lat_unit": 2, "998917geospatial_lon_min": 2, "012548geospatial_lon_resolut": 2, "017998999999988996geospatial_lon_unit": 2, "36z": 2, "phaseprocessing_level": 2, "723265stime_coverage_end": 2, "21ztime_coverage_resolut": 2, "30ztitl": 2, "0x7f6ef186fe90": [], "test": 2, "assert_allclos": 2, "open_dataset": 2, "success": 2, "overview": 2, "credenti": 2, "sla_filt": 2, "mdt": 2, "basic": 2, "sat_id": 2, "specif": 2, "each": 2, "sat_list": [2, 3], "max": 2, "_": 2, "bound": 2, "chang": 2, "cd": [2, 4], "conf": [2, 3], "overrid": [2, 3], "my_conf": 2, "str": 2, "id": 2, "place": 2, "holder": 2, "min_tim": [2, 3], "tempor": 2, "domain": 2, "max_tim": [2, 3], "end": 2, "min_lon": [2, 3], "lower": 2, "longitudin": 2, "max_lon": [2, 3], "upper": 2, "min_lat": [2, 3], "latitudin": 2, "max_lat": [2, 3], "python_interfac": 2, "misc": 2, "verbos": 2, "displai": 2, "to_run": [2, 4], "group": 2, "compos": 2, "those": 2, "option": 2, "dc_ose_2021_inference_data": 2, "arg": 2, "__placehold": 2, "anyth": 2, "foo": 2, "bar": 2, "valu": [2, 3], "54": [2, 3, 4], "32": [2, 3, 4], "_target_": 2, "_partial_": 2, "dataset_id": 2, "cmems_get": 2, "duacs_l3": 2, "regex": 2, "month_regex_from_d": 2, "output_directori": 2, "force_download": 2, "overwrite_output_data": 2, "input_path": 2, "glob": [2, 3, 4], "iglob": 2, "pathnam": 2, "root_dir": 2, "null": 2, "dir_fd": 2, "recurs": 2, "include_hidden": 2, "fals": 2, "output_path": 2, "preprocess_track": 2, "sort_path": 2, "power": 2, "cc": 2, "view": 2, "000": [], "debug": 2, "server": 2, "dataset_url": 2, "retriev": 2, "uniqu": 2, "identifi": 2, "dataset_vers": 2, "forc": 2, "dataset_part": 2, "usernam": 2, "authent": 2, "password": 2, "no_directori": 2, "bool": 2, "organ": 2, "show_outputnam": 2, "union": 2, "pathlib": 2, "path": 2, "where": [2, 3], "save": [2, 3, 4], "credentials_fil": 2, "contain": 2, "skip": 2, "confirm": 2, "befor": 2, "overwrit": 2, "output": [2, 3, 4], "request_fil": 2, "request": [2, 3, 4], "overwrite_metadata_cach": 2, "cach": 2, "no_metadata_cach": 2, "filter": 2, "regular": 2, "express": 2, "file_list": 2, "A": [2, 4], "text": [2, 3, 4], "filenam": 2, "line": 2, "must": 2, "match": 2, "absolut": 2, "create_file_list": 2, "onli": 2, "creat": 2, "target": 2, "instead": 2, "them": 2, "It": 2, "write": [2, 3], "current": 2, "other": [2, 3], "action": 2, "perform": 2, "index_part": 2, "insitu": 2, "temporari": 2, "sync": 2, "synchron": 2, "remot": 2, "sync_delet": 2, "delet": 2, "ar": 2, "present": 2, "return": 2, "open": 2, "multifil": 2, "contaten": 2, "sequenc": 2, "callabl": 2, "function": 2, "whether": 2, "sort": 2, "concaten": 2, "more": 4, "detail": 4, "oceanbench": 4, "prepar": [3, 4], "ob": [3, 4], "0x7f06e978a110": [], "gist": [3, 4], "2d034392ee9b385fb4de3c8628bfc8cache44": 4, "2d034392ee9b385fb4de3c8628bfc844": [3, 4], "4afecfce184a6e668def7ec3a99cb6cd4d612bdc": 4, "patcher_oi_torch": [3, 4], "py": [3, 4], "resolv": [3, 4], "185": [3, 4], "199": [3, 4], "111": 3, "133": [3, 4], "110": [3, 4], "connect": [3, 4], "443": [3, 4], "sent": [3, 4], "await": [3, 4], "respons": [3, 4], "200": [3, 4], "ok": [3, 4], "4247": 4, "1k": [3, 4], "plain": [3, 4], "kb": [3, 4], "15k": 4, "58": [2, 3, 4], "mb": [3, 4], "oi": [3, 4], "nameerror": [], "traceback": [], "most": [], "recent": [], "call": [], "last": [], "panda": [3, 4], "pd": [3, 4], "functool": [3, 4], "partial": [3, 4], "xrpatcher": [3, 4], "xrdapatch": [3, 4], "outgrid": [3, 4], "outgrid_da": [3, 4], "dataarrai": [3, 4], "dim": [3, 4], "coord": [3, 4], "dict": [3, 4], "date_rang": [3, 4], "arang": [3, 4], "43": [3, 4], "patcher_cl": [3, 4], "patch": [3, 4], "stride": [3, 4], "to_timedelta": [3, 4], "7d": [3, 4], "lx": [3, 4], "ly": [3, 4], "nois": [3, 4], "obs_dt": [3, 4], "1d": [3, 4], "obs_dx": [3, 4], "obs_di": [3, 4], "devic": [3, 4], "cuda": [3, 4], "ocn_tool": [3, 4], "_src": [3, 4], "geoprocess": [3, 4], "geostroph": [3, 4], "geo": [3, 4], "to_dataset": [3, 4], "pipe": [3, 4], "geostrophic_veloc": [3, 4], "kinetic_energi": [3, 4], "isel": 4, "slice": 4, "ke": [3, 4], "col": 4, "col_wrap": 4, "figsiz": 4, "ref": 4, "o": 4, "to_netcdf": [3, 4], "study_path": [3, 4], "_03_interp_on_track": [3, 4], "_04_1_lambdax": [3, 4], "_04_2_mu": [3, 4], "aw": 4, "cp": 4, "melodi": 4, "quentin_cloud": 4, "ocb_oi_demo": 4, "acl": 4, "public": [], "read": 4, "gtoken": 4, "checkout": 4, "b": 4, "echo": 4, "toml": 4, "oi_demo": 4, "west": 4, "wasabisi": 4, "var": 4, "m": [3, 4], "submiss": 4, "push": [], "cat": 4, "pull": 4, "compar": 4, "expand": 4, "0x7f10a45b9a90": [], "108": [3, 4], "obs_var": [], "timedelta": [], "dai": [], "73": [3, 4], "62": [3, 4], "35it": 3, "71it": [3, 4], "8": [3, 4], "04it": [], "33it": [3, 4], "57it": 3, "9": [3, 4], "75it": [3, 4], "88it": [3, 4], "99it": [], "07it": [3, 4], "12it": 3, "17": [2, 3, 4], "29it": 3, "51it": 4, "72it": 4, "03it": 3, "55it": 3, "74it": 4, "93it": 3, "95it": 3, "92it": [3, 4], "85it": 4, "82it": [3, 4], "79it": [3, 4], "81it": 3, "77it": [3, 4], "80it": 3, "60it": [3, 4], "42it": 3, "23it": [3, 4], "94it": [], "50it": [3, 4], "59": [3, 4], "40it": 3, "60": [3, 4], "34it": [3, 4], "27it": [3, 4], "63": [3, 4], "64": [3, 4], "21it": 3, "17it": 3, "67": [3, 4], "68": [3, 4], "28it": 3, "71": [3, 4], "45it": [], "61it": 3, "74": [3, 4], "75": [3, 4], "08it": [3, 4], "26it": 3, "78": [3, 4], "57": [3, 4], "36it": [], "79": [3, 4], "53it": 3, "82": [3, 4], "61": [3, 4], "85": [3, 4], "63it": [3, 4], "86": [3, 4], "66it": [3, 4], "88": [3, 4], "89": [3, 4], "78it": 4, "90": [3, 4], "92": [3, 4], "93": [3, 4], "95": [3, 4], "69": [3, 4], "96": [3, 4], "86it": 3, "97": [3, 4], "99": [3, 4], "72": [3, 4], "89it": 4, "facetgrid": 4, "0x7f1060329450": [], "159": 3, "interp_on_track": [3, 4], "error": [], "execut": [], "raid": 3, "localscratch": 3, "qfebvr": 3, "lib": 3, "python3": 3, "site": 3, "packag": 3, "hydra_zen": [], "wrapper": [], "_implement": [], "427": [], "__call__": [], "func": [], "__init__": [], "backend": 3, "api": [], "1021": [], "rais": [], "oserror": [], "hydra_full_error": [], "complet": [], "stack": [], "trace": [], "0x7f6c59ca0d90": [], "37it": 3, "73it": 3, "06it": 3, "76it": 3, "90it": [2, 3, 4], "00it": 4, "09it": 3, "13it": 3, "30it": 3, "49it": [3, 4], "02it": 3, "56it": 3, "65it": 3, "64it": 3, "70it": [3, 4], "69it": [], "68it": [3, 4], "54it": 3, "18it": 3, "67it": 3, "31it": 3, "22it": [3, 4], "20it": [3, 4], "87it": 4, "52it": [], "62it": [3, 4], "histori": [], "thread": [], "hit": [], "unexpect": [], "operationalerror": [], "attempt": [], "readonli": [], "databas": [], "written": [], "0x7f6b5d16c150": [], "506": 3, "434": [], "435": [], "lambdax": [3, 4], "509": [], "effect": [3, 4], "score": [3, 4], "143": [3, 4], "518": [], "mu": [3, 4], "554": 2, "8818722045815395": 4, "555": 2, "0x7f1530178fd0": [], "98it": [], "84it": [], "05it": [3, 4], "10it": [3, 4], "38it": 3, "83it": [3, 4], "48it": [3, 4], "19it": [3, 4], "46it": [3, 4], "32it": [], "58it": [3, 4], "0x7f1433a4fe50": [], "bash": [3, 4], "164": 3, "167": 3, "168": 3, "249": 3, "259": 3, "260": 3, "302": 3, "303": 3, "476": [], "09obj": [], "243": 3, "gitignor": 4, "inpu0": 4, "454k": 4, "inp0": 4, "65m": 4, "703k": 4, "48m": 4, "39m": 4, "20file": [], "22m": 4, "65file": [], "0x7f1e30728250": [], "41it": [3, 4], "39it": [3, 4], "91it": [3, 4], "14it": 3, "43it": [3, 4], "24it": 3, "25it": 4, "0x7f1d2c858110": [], "705": [], "659": [], "660": [], "736": [], "750": [], "751": [], "793": [], "075": [], "12z": [], "008": [], "80": 3, "822": 2, "823": 2, "537": [], "566": [], "0x7f7041f690d0": [], "943": [], "036": [], "129": 3, "221": 3, "404": [], "483": [], "96obj": [], "248": 3, "0x7f704065ed10": [], "894": [], "07obj": [], "58file": [], "01file": [], "0x7fb4e5d24f50": [], "01it": 3, "59it": 3, "47it": [3, 4], "0x7fb3e9191350": [], "197": 3, "198": 3, "134": 3, "135": 3, "212": 3, "222": 3, "261": 3, "concat": [3, 4], "read_json": [3, 4], "p": [3, 4], "typ": [3, 4], "seri": [3, 4], "to_markdown": [3, 4], "881872": 4, "lambda_x": [3, 4], "366": 4, "reus": 1, "explor": 1, "constel": 1, "preprocess": [], "766": 2, "94": [2, 3], "29z": 2, "885": 2, "16it": [2, 3], "101": [2, 3], "102": [2, 3], "816": 2, "848": 2, "0x7fcb8e354a10": 2, "373": 2, "464": 2, "644": 2, "733": 2, "986": 2, "494": [2, 4], "01obj": 2, "257": [2, 3, 4], "0x7fcb8ca576d0": 2, "dc_ose_2021": 3, "input_data": 3, "cfg": 3, "mkdir": 3, "writefil": 3, "s3b": 3, "2019": 3, "180": 3, "searchpath": 3, "dry": 3, "498": [], "594": [], "595": [], "691": [], "692": [], "788": [], "789": [], "884": [], "572": [], "573": [], "668": [], "28z": [], "374": [], "684": [], "685": [], "951": [], "969": [], "971": 4, "072": [], "00z": 3, "608": [], "97it": 4, "192": 3, "193": 3, "166": 3, "186": 3, "188": 3, "290": 3, "626": [], "888": [], "747": [], "748": [], "749": [], "850": [], "51z": [], "050": [], "431": [], "432": [], "676": [], "694": [], "hvplot": 3, "extens": [], "to_plot": 3, "to_datetim": 3, "kind": 3, "coastlin": 3, "width": 3, "7000": 3, "500": 3, "cmap": 3, "rdylbu_r": 3, "aaeaed8ce5a1559507be8dd52e37c134f777192c": 3, "4242": 3, "14k": 3, "324": 3, "87": 3, "44it": 3, "76": 3, "83": 3, "91": 3, "11it": 3, "98": 3, "103": 3, "104": 3, "105": 3, "106": 3, "107": 3, "112": 3, "113": 3, "114": 3, "115": 3, "116": 3, "117": 3, "118": 3, "119": 3, "120": 3, "121": 3, "122": 3, "123": 3, "124": 3, "125": 3, "126": 3, "130": 3, "131": 3, "136": 3, "137": 3, "138": 3, "139": 3, "140": 3, "141": 3, "142": 3, "144": 3, "145": 3, "146": 3, "147": 3, "148": 3, "149": 3, "150": 3, "151": 3, "152": 3, "153": 3, "154": 3, "155": 3, "156": 3, "157": 3, "158": 3, "160": 3, "161": 3, "162": 3, "163": 3, "165": 3, "169": 3, "170": 3, "171": 3, "172": 3, "173": 3, "174": 3, "175": 3, "176": 3, "177": 3, "178": 3, "179": 3, "181": 3, "182": 3, "183": 3, "184": 3, "187": 3, "189": 3, "190": 3, "191": 3, "194": 3, "195": 3, "196": 3, "201": 3, "202": 3, "203": 3, "204": 3, "205": 3, "206": 3, "207": 3, "208": 3, "209": 3, "210": 3, "211": 3, "213": 3, "214": 3, "215": 3, "216": 3, "217": 3, "218": 3, "219": 3, "220": 3, "225": 3, "226": 3, "228": 3, "229": 3, "230": 3, "231": 3, "232": 3, "233": 3, "234": 3, "235": 3, "236": 3, "237": 3, "238": 3, "239": 3, "240": 3, "241": 3, "242": 3, "244": 3, "245": 3, "246": 3, "247": 3, "250": 3, "251": 3, "252": 3, "253": 3, "254": 3, "255": 3, "256": 3, "258": 3, "262": 3, "263": 3, "264": 3, "265": 3, "266": 3, "267": 3, "268": 3, "269": 3, "270": 3, "271": 3, "272": 3, "273": 3, "274": 3, "275": 3, "276": 3, "277": 3, "278": 3, "279": 3, "280": 3, "281": 3, "282": 3, "283": 3, "284": 3, "285": 3, "286": 3, "287": 3, "288": 3, "289": 3, "291": 3, "292": 3, "293": 3, "294": 3, "295": 3, "296": 3, "297": 3, "298": 3, "299": 3, "300": 3, "301": 3, "304": 3, "305": 3, "306": 3, "307": 3, "308": 3, "309": 3, "310": 3, "311": 3, "312": 3, "314": 3, "315": 3, "316": 3, "317": 3, "318": 3, "319": 3, "320": 3, "321": 3, "322": 3, "323": 3, "global_land_mask": 3, "globe": 3, "lon_grid": 3, "lat_grid": 3, "meshgrid": 3, "globe_ocean_mask": 3, "is_ocean": 3, "out_plot": 3, "lambda": 3, "valid": 3, "val": 3, "ab": 3, "validate_latlon": 3, "viridi": 3, "clim": 3, "pint": 3, "facet": 3, "quantiti": 3, "998": 3, "runtimewarn": 3, "divid": 3, "zero": 3, "encount": 3, "magnitud": 3, "magnitude_op": 3, "new_self": 3, "_magnitud": 3, "method_output": 3, "study_var": 3, "global_ev": 3, "843": [], "957": [], "out_grid": 3, "pad": 3, "mode": 3, "edg": 3, "assign_coord": 3, "attributeerror": [], "core": [], "common": [], "attraccessmixin": [], "__getattr__": [], "self": [], "suppress": [], "keyerror": [], "sourc": [], "__name__": [], "ha": [], "13obj": 4, "36file": 4, "prepare1": 4, "77m": 4, "4mb": 4, "prepare2": 4, "23m": 4, "0mb": 4, "36m": 4, "6mb": 4, "66file": 4, "0x7f0aba6a6790": 4, "0x7f09bdaae250": 4, "978": 4, "878": 4, "879": 4, "960": 4, "972": 4, "012": 4, "013": 4, "076": [], "367": [], "463": [], "10t10": [], "419": [], "420": [], "868": [], "869": [], "693": [], "709": [], "710": [], "711": [], "880": [], "24z": [], "340": [], "341": [], "849": 3, "525": [], "544": [], "546": [], "649": [], "50z": [], "801": [], "063": [], "064": [], "872": [], "887": [], "990": [], "13z": [], "779": [], "780": [], "96it": 3, "628": 3, "739": [], "740": [], "541": [], "917": [], "catalogue_pars": [], "773": [], "parse_catalogu": [], "_parse_catalogu": [], "cachier": [], "func_wrapp": [], "kei": [], "entri": [], "get_entri": [], "tupl": [], "kwarg": [], "get_entry_by_kei": [], "pickl": [], "_reload_cach": [], "cache_fil": [], "noqa": [], "s301": [], "enum": [], "695": [], "__new__": [], "1111": [], "ve_exc": [], "valueerror": [], "_servicenam": [], "omi_arco": [], "omi": [], "arco": [], "_serviceshortnam": [], "copernicusmarinedatasetservicetyp": [], "dure": [], "handl": [], "abov": [], "except": [], "anoth": [], "occur": [], "core_funct": [], "deprec": [], "exception_handl": [], "get_funct": [], "_run_get_request": [], "catalogu": [], "marine_data_store_product": [], "_retrieve_marine_data_store_product": [], "754": [], "marine_data_store_root_collect": [], "loop": [], "run_until_complet": [], "nest_asyncio": [], "result": [], "asyncio": [], "futur": [], "_except": [], "with_traceback": [], "_exception_tb": [], "task": [], "__step": [], "coro": [], "throw": [], "exc": [], "744": [], "async_fetch_catalog": [], "child": [], "async_fetch_child": [], "root_url": [], "child_link": [], "723": [], "rolling_batch_gath": [], "max_concurrent_request": [], "util": [], "gather": [], "worker": [], "rang": [], "per_batch": [], "339": [], "__wakeup": [], "send": [], "re": [], "append": [], "get_nowait": [], "699": [], "async_fetch_collect": [], "item": [], "async_fetch_items_from_collect": [], "680": [], "item_json": [], "get_json_fil": [], "aioretri": [], "retri": [], "wrap": [], "e": [], "fn": [], "378": [], "aiohttp": [], "client_reqrep": [], "1166": [], "contenttypeerror": [], "client_except": [], "messag": [], "decod": [], "mimetyp": [], "xml": [], "stac": [], "blksea_analysisforecast_wav_007_003": [], "cmems_mod_blk_wav_anfc_2": [], "5km_pt1h": [], "i_202211": [], "x": [], "cop": [], "client": [], "unclos": [], "session": [], "client_sess": [], "clientsess": [], "0x7f2f63283e50": [], "598": [], "connector": [], "client_proto": [], "responsehandl": [], "0x7f2f62eb1400": [], "3965072": [], "253125918": [], "0x7f2f62eb0c20": [], "3965073": [], "160349349": [], "0x7f2f62eb1320": [], "171237526": [], "0x7f2f62eb14e0": [], "202591537": [], "0x7f2f62eb0750": [], "262587048": [], "0x7f2f62eb1710": [], "264491611": [], "0x7f2f62eb17f0": [], "271312965": [], "0x7f2f632a3380": [], "560298969": [], "0x7f2f62eb1080": [], "639897713": [], "0x7f2f62eb0fa0": [], "650006185": [], "0x7f2f62eb0b40": [], "655820985": [], "0x7f2f62eb0de0": [], "704152952": [], "0x7f2f62eb0980": [], "725327557": [], "0x7f2f62eb08a0": [], "778946927": [], "0x7f2f62eb0ec0": [], "3965076": [], "305172768": [], "tcpconnector": [], "0x7f2f62f93390": [], "reshap": [], "382": [], "axi": [], "join": [], "ignore_index": [], "verify_integr": [], "copi": [], "379": [], "elif": [], "using_copy_on_writ": [], "380": 3, "op": [], "_concaten": [], "383": [], "384": [], "385": [], "386": [], "387": [], "388": [], "389": [], "390": [], "391": [], "392": [], "393": [], "395": [], "get_result": [], "445": [], "442": [], "_clean_keys_and_obj": [], "447": [], "figur": [], "what": [], "our": [], "ndim": [], "_get_ndim": [], "507": [], "504": [], "objs_list": [], "list": [], "len": [], "No": [], "510": [], "not_non": [], "968": 3, "066": [], "356": [], "046": [], "047": [], "10t11": 3, "613": [], "614": [], "564": [], "580": [], "581": [], "582": [], "689": [], "49z": [], "913": [], "930": [], "932": [], "038": [], "533": [], "34z": [], "381": [], "502": 3, "hvfig": 3, "mplfig": 3, "render": 3, "outofmemoryerror": [], "tmp": [], "tmpsv4gc06w": [], "torch": [], "diag": [], "nob": [], "tobs_tim": [], "coo": [], "hbht": [], "mi": [], "linalg": [], "inv": [], "iw": [], "mm": [], "bht": [], "sol": [], "mv": [], "tobs_valu": [], "memori": [], "tri": [], "alloc": [], "gpu": [], "total": [], "capac": [], "gib": [], "which": [], "free": [], "process": [], "929859": [], "3305133": [], "344815": [], "includ": [], "non": [], "pytorch": [], "Of": [], "reserv": [], "unalloc": [], "larg": [], "try": [], "pytorch_cuda_alloc_conf": [], "expandable_seg": [], "avoid": [], "fragment": [], "see": [], "manag": [], "org": [], "stabl": [], "note": [], "html": [], "635": 3, "752": 3, "753": 3, "861": 3, "071": 3, "725": 3, "11z": 3, "651": 3, "068": 3, "069": 3, "055": 3, "070": 3, "073": 3, "45z": 3, "735": 3, "531": 3, "532": 3, "634": 3, "09z": 3, "077": 3, "099": 3, "32z": 3, "570": 3, "010": 3, "011": 3, "870": 3, "674": 3, "10t12": 3, "325": 3, "326": 3, "489": 3, "interpol": 3, "9258186582103995": 3, "925819": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"setup": 0, "instal": 0, "conda": 0, "environ": 0, "without": [0, 2], "clone": 0, "With": 0, "On": [0, 1], "colab": 0, "credenti": 0, "need": 0, "reproduc": [0, 2], "demo": [0, 2], "notebook": 0, "cmem": 0, "fetch": [0, 4], "sourc": 0, "data": [0, 2, 3, 4], "from": 0, "copernicu": 0, "portal": 0, "aw": 0, "push": [0, 4], "prepar": [0, 2], "cloud": 0, "storag": 0, "upload": 0, "method": [0, 4], "result": [0, 4], "leaderboard": [0, 4], "submiss": 0, "github": 0, "creat": 0, "pull": 0, "request": 0, "repo": 0, "origin": 0, "fork": 0, "oceanbench": [1, 2], "datachalleng": [1, 2, 3, 4], "overal": 1, "present": 1, "background": 1, "shoulder": 1, "giant": 1, "featur": 1, "showcas": 1, "contribut": 1, "access": 2, "v2": 2, "reus": [2, 3], "process": 2, "step": 2, "us": [2, 4], "configur": [2, 4], "ocb": [2, 4], "dc_ose_2021": [2, 4], "input_data": 2, "pipelin": 2, "singl": 2, "satellit": 2, "dry": 2, "actual": 2, "execut": 2, "run": 2, "all": 2, "download": [2, 3], "version": [2, 3], "preprocess": [2, 3], "list": 2, "content": 2, "input": [2, 4], "visual": [2, 4], "check": 2, "gener": 2, "v": 2, "more": 2, "usag": 2, "help": 2, "doc": 2, "particip": 4, "challeng": 4, "appli": 4, "evalu": 4, "submit": 4, "my": 4, "basic": 4, "optim": 4, "interpol": 4, "refer": 4, "metric": 4, "make": 4, "your": 4, "reconstruct": 4, "public": 4, "through": 4, "http": 4, "link": 4, "branch": 4, "ad": 4, "i": 4, "automat": 4, "updat": 4, "implement": 3, "explor": 3, "global": 3, "usecas": 3, "differ": 3, "constel": 3}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Setup": [[0, "setup"]], "Installing the conda environment": [[0, "installing-the-conda-environment"]], "Without cloning": [[0, "without-cloning"]], "With cloning": [[0, "with-cloning"]], "On colab": [[0, "on-colab"]], "Credentials needed to reproduce the demo notebooks": [[0, "credentials-needed-to-reproduce-the-demo-notebooks"]], "CMEMS: to fetch source data from the copernicus portal": [[0, "cmems-to-fetch-source-data-from-the-copernicus-portal"]], "AWS: to push prepared data to cloud storage or upload method result for leaderboard submission": [[0, "aws-to-push-prepared-data-to-cloud-storage-or-upload-method-result-for-leaderboard-submission"]], "GITHUB: to create a leaderboard pull request on the repo (from the original or a fork)": [[0, "github-to-create-a-leaderboard-pull-request-on-the-repo-from-the-original-or-a-fork"]], "OceanBench DataChallenge": [[1, "oceanbench-datachallenge"]], "Overall presentation": [[1, "overall-presentation"]], "Background: On the shoulder of Giants:": [[1, "background-on-the-shoulder-of-giants"]], "Feature Showcase": [[1, "feature-showcase"]], "Contributing": [[1, "contributing"]], "Data Access for the Oceanbench v2 datachallenge demo": [[2, "data-access-for-the-oceanbench-v2-datachallenge-demo"]], "Reusing processing steps and reproducing data preparation": [[2, "reusing-processing-steps-and-reproducing-data-preparation"]], "Use the configured ocb-dc_ose_2021-input_data pipeline": [[2, "use-the-configured-ocb-dc-ose-2021-input-data-pipeline"]], "Reproduce processing of single satellite": [[2, "reproduce-processing-of-single-satellite"]], "Dry (without actual execution) run for all satellites": [[2, "dry-without-actual-execution-run-for-all-satellites"]], "Downloading versioned and preprocessed data": [[2, "downloading-versioned-and-preprocessed-data"], [3, "downloading-versioned-and-preprocessed-data"]], "Listing datachallenge content": [[2, "listing-datachallenge-content"]], "Downloading prepared input data": [[2, "downloading-prepared-input-data"]], "Visualize input data": [[2, "visualize-input-data"]], "Checking generated data VS downloaded": [[2, "checking-generated-data-vs-downloaded"]], "More on pipeline usage (help, doc, \u2026)": [[2, "more-on-pipeline-usage-help-doc"]], "Participating to the data challenge: applying, evaluating and submitting a method": [[4, "participating-to-the-data-challenge-applying-evaluating-and-submitting-a-method"]], "Fetching the input data": [[4, "fetching-the-input-data"]], "Applying my method: Basic optimal interpolation": [[4, "applying-my-method-basic-optimal-interpolation"]], "Visualize results": [[4, "visualize-results"]], "Evaluate": [[4, "evaluate"]], "Fetch reference data": [[4, "fetch-reference-data"]], "Use the configured ocb-dc_ose_2021-metrics": [[4, "use-the-configured-ocb-dc-ose-2021-metrics"]], "Submit method to datachallenge": [[4, "submit-method-to-datachallenge"]], "Make your reconstruction public through a http link": [[4, "make-your-reconstruction-public-through-a-http-link"]], "Push a branch leaderboard/<> adding your method": [[4, "push-a-branch-leaderboard-adding-your-method"]], "Leaderboard is automatically updated": [[4, "leaderboard-is-automatically-updated"]], "Reusing the datachallenge implementation for exploring global usecase with different constellation": [[3, "reusing-the-datachallenge-implementation-for-exploring-global-usecase-with-different-constellation"]]}, "indexentries": {}})