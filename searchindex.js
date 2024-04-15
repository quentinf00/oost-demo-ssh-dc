Search.setIndex({"docnames": ["installation", "intro", "oost_dc_ose_2021_data", "oost_dc_ose_2021_global", "oost_dc_ose_2021_oi"], "filenames": ["installation.md", "intro.md", "oost_dc_ose_2021_data.md", "oost_dc_ose_2021_global.md", "oost_dc_ose_2021_oi.md"], "titles": ["Setup", "Ocean Observation Science Toolkit: SSH Data challenge Design", "Versioned data download and reproduction", "Reusing the datachallenge implementation for exploring global usecase with different constellation", "Participating to the data challenge: applying, evaluating and submitting a method"], "terms": {"prerequisit": 0, "mamba": 0, "merg": 0, "pip": 0, "ipython": 0, "jupyt": [0, 1], "The": [0, 1, 2, 3], "requir": [0, 2, 3], "depend": 0, "you": [0, 1], "usag": [0, 3], "mai": 0, "full": 0, "have": 0, "therefor": 0, "been": 0, "split": 0, "differ": [0, 1], "file": [0, 2, 4], "env": [0, 2], "folder": 0, "repositori": 0, "quentinf00": [0, 1, 2, 3, 4], "ocb": 3, "dc": [0, 1, 2, 4], "os": 0, "2021": [0, 2, 3], "git": [0, 1, 2, 4], "reli": 0, "compil": 0, "multipl": 0, "one": [0, 2, 3], "suit": [0, 1], "your": [0, 2, 3], "below": 0, "an": [0, 1], "exampl": [0, 1], "wget": [0, 3, 4], "nc": [0, 2, 3, 4], "http": [0, 1, 2, 3], "raw": [0, 3, 4], "githubusercont": [0, 3, 4], "com": [0, 1, 2, 3, 4], "doc": [0, 3], "base": [0, 2], "dvc": [0, 1, 2, 4], "s3": [0, 4], "yaml": [0, 2, 3], "quiet": 0, "n": [0, 2, 3], "f": 0, "In": 0, "first": [0, 2, 3], "cell": 0, "run": [0, 3, 4], "q": [0, 2], "condacolab": 0, "import": [0, 2, 3, 4], "install_mambaforg": 0, "If": [0, 2], "don": 0, "t": [0, 3], "go": 0, "here": [0, 1], "login": 0, "us": [0, 1, 3], "cli": [0, 1, 2, 3], "copernicusmarin": [0, 2, 3], "can": [0, 1], "authentif": 0, "configur": [0, 1], "set": 0, "variabl": [0, 2, 3], "aws_endpoint_url": 0, "aws_default_region": 0, "aws_secret_access_kei": 0, "aws_access_key_id": 0, "we": 1, "provid": [1, 2], "document": 1, "notebook": 1, "associ": 1, "github": [1, 2, 4], "thi": 1, "aim": 1, "lai": 1, "foundat": 1, "build": 1, "ecosystem": 1, "facilit": 1, "develop": 1, "applic": 1, "ocean": [2, 3], "observ": [2, 3], "scienc": [], "work": 1, "i": [1, 2, 3], "built": 1, "upon": 1, "exist": [1, 2], "should": 1, "check": 1, "out": 1, "data": [], "challeng": [], "well": 1, "thought": 1, "evalu": 1, "case": 1, "input": 1, "download": [1, 3, 4], "instruct": 1, "metric": [1, 3], "code": 1, "method": [1, 3], "tool": 1, "ml": 1, "hydra": [1, 2, 3], "zen": 1, "python": 1, "workflow": 1, "share": 1, "adapt": 1, "config": [1, 2, 3], "integr": 1, "easi": 1, "comput": [1, 2, 3], "local": [1, 2, 3], "cluster": 1, "log": 1, "version": [1, 3, 4], "pipelin": [1, 3], "paramet": [1, 2], "artefact": 1, "descript": 1, "orchestr": 1, "make": 1, "through": 1, "follow": 1, "5": [1, 2, 3, 4], "min": [1, 2, 3], "walkthrough": 1, "video": 1, "demonstr": 1, "new": 1, "brought": 1, "implement": 1, "access": 1, "reproduct": [1, 4], "autom": 1, "leaderboard": 1, "updat": 1, "usecas": 1, "scale": [1, 3, 4], "oper": 1, "idea": 1, "project": 1, "defin": 1, "guidelin": 1, "so": 1, "actor": 1, "add": 1, "brick": 1, "while": [1, 2], "good": 1, "interoper": 1, "exit": 1, "compon": 1, "clarifi": 1, "how": 1, "do": [1, 2], "To": 1, "continu": 1, "setup": 1, "v2": [], "demo": [1, 2, 4], "particip": 1, "appli": [1, 2], "submit": 1, "reus": 1, "explor": 1, "global": [1, 2], "constel": 1, "param": [2, 3, 4], "sat": [2, 3, 4], "j2g": [2, 3], "2024": [2, 3, 4], "04": [2, 3, 4], "10": [2, 3, 4], "15": [2, 3, 4], "36": [2, 3, 4], "59": [3, 4], "610": [], "aprl": [2, 3, 4], "appareil": [2, 3, 4], "info": [2, 3, 4], "start": [2, 3, 4], "part": [2, 3, 4], "_01_dl_track": [2, 3, 4], "10t15": [], "59z": [], "dataset": [2, 3], "wa": [2, 3], "specifi": [2, 3], "latest": [2, 3], "select": [2, 3], "202112": [2, 3], "978": [], "copernicus_marine_root_logg": [2, 3], "default": [2, 3, 4], "servic": [2, 3], "origin": [2, 3], "0": [2, 3, 4], "66": [2, 3, 4], "00": [2, 3, 4], "": [2, 3, 4], "2": [2, 3, 4], "1": [2, 3, 4], "13": [2, 3, 4], "14": [2, 3, 4], "47": [2, 3, 4], "3": [2, 3, 4], "06": [2, 3, 4], "32": [2, 3, 4], "6": [2, 3, 4], "20": [2, 3, 4], "64it": [3, 4], "29": [3, 4], "19": [2, 3, 4], "17": [2, 3, 4], "71it": [3, 4], "100": [2, 3, 4], "4": [2, 3, 4], "46it": [3, 4], "37": [2, 3, 4], "115": 3, "done": [2, 3, 4], "_02_prepare_track": [2, 3, 4], "116": 3, "ocb_dc_ose_2021": [], "mod": [2, 3, 4], "prepare_track": [2, 3], "22": [2, 3, 4], "197": [], "225": [], "0m": [2, 3, 4], "xarrai": [2, 3, 4], "xr": [2, 3, 4], "d": [2, 3], "open_mfdataset": [2, 3, 4], "combin": [1, 2, 3, 4], "nest": [2, 3, 4], "concat_dim": [2, 3, 4], "time": [2, 3, 4], "lt": [2, 3, 4], "gt": [2, 3], "size": [2, 3], "450kb": 2, "dimens": [2, 3], "14060": 2, "coordin": [2, 3], "datetime64": [2, 3], "112kb": 2, "2017": [2, 3, 4], "07": [2, 3, 4], "11t14": 2, "55": [2, 3, 4], "44": [2, 3, 4], "772069888": 2, "lon": [2, 3, 4], "float64": [2, 3], "dask": [2, 3], "arrai": [2, 3], "chunksiz": [2, 3], "meta": [2, 3], "np": [2, 3, 4], "ndarrai": [2, 3], "lat": [2, 3, 4], "ssh": [0, 2, 3, 4], "attribut": [2, 3], "12": [2, 3, 4], "convent": [2, 3], "cf": [2, 3], "metadata_convent": [2, 3], "unidata": [2, 3], "discoveri": [2, 3], "v1": [2, 3], "cdm_data_typ": [2, 3], "swath": [2, 3], "comment": [2, 3], "sea": [2, 3], "surfac": [2, 3], "height": [2, 3], "measur": [2, 3], "altimet": [2, 3], "contact": [2, 3], "servicedesk": [2, 3], "cmem": [2, 3], "mercat": [2, 3], "eu": [2, 3], "creator_email": [2, 3], "summari": [2, 3], "ssalto": [2, 3], "duac": [2, 3], "delai": [2, 3], "level": [2, 3], "su": [2, 3], "time_coverage_dur": [2, 3], "p12h19m2": 2, "66746": 2, "time_coverage_end": [2, 3], "11t23": 2, "30": [2, 3, 4], "27z": 2, "time_coverage_resolut": [2, 3], "p1": [2, 3], "time_coverage_start": [2, 3], "11t11": 2, "11": [2, 3, 4], "25z": 2, "titl": [2, 3], "dt": [2, 3], "ostm": [2, 3], "jason": [2, 3], "long": 2, "repeat": 2, "orbit": 2, "datasetdimens": [2, 3], "14060coordin": 2, "x27": [2, 3], "45": [2, 3, 4], "769939968": 2, "46": [2, 3, 4], "767809792": 2, "09": [2, 3, 4], "14t02": 2, "26": [2, 3, 4], "254863104": 2, "27": [2, 3, 4], "252733184": 2, "28": [2, 3, 4], "250603008": 2, "dtype": [2, 3], "float64dask": [2, 3], "unit": [2, 3], "degrees_eaststandard_nam": [2, 3], "longitudelong_nam": [2, 3], "longitud": [2, 3], "chunk": [2, 3], "byte": [2, 3], "109": [2, 3, 4], "84": [2, 3, 4], "kib": 2, "shape": [2, 3], "graph": [2, 3], "layer": [2, 3], "type": [2, 3], "numpi": [2, 3, 4], "degrees_northstandard_nam": [2, 3], "latitudelong_nam": [2, 3], "latitud": [2, 3], "mstandard_nam": [2, 3], "sea_surface_heightlong_nam": [2, 3], "index": [2, 3], "timepandasindexpandasindex": [2, 3], "datetimeindex": [2, 3], "765679872": 2, "48": [2, 3, 4], "763549952": 2, "49": [2, 3, 4], "761420032": 2, "50": [2, 3, 4], "759289856": 2, "51": [2, 3, 4], "757159936": 2, "52": [2, 3, 4], "755030016": 2, "53": [2, 3, 4], "752900096": 2, "01": [2, 3, 4], "56": [2, 3, 4], "35": [2, 3, 4], "469000960": 2, "466871040": 2, "464741120": 2, "38": [2, 3, 4], "462611200": 2, "39": [2, 3, 4], "460480768": 2, "40": [2, 3, 4], "458350848": 2, "41": [2, 3, 4], "456220928": 2, "02": [2, 3, 4], "name": [2, 3, 4], "length": [2, 3, 4], "freq": [2, 3], "none": [2, 3, 4], "6metadata_convent": [2, 3], "0cdm_data_typ": [2, 3], "swathcom": [2, 3], "referenc": [2, 3], "1993": [2, 3], "2012": [2, 3], "period": [2, 3], "addit": [2, 3], "correct": [2, 3], "propos": [2, 3], "sla": [2, 3], "alreadi": [2, 3], "dac": [2, 3], "ocean_tid": [2, 3], "lwe": [2, 3], "uncorrect": [2, 3], "from": [2, 3, 4], "product": [2, 3], "eucreator_email": [2, 3], "eucreator_nam": [2, 3], "themat": [2, 3], "assembli": [2, 3], "centercreator_url": [2, 3], "marin": [2, 3], "copernicu": [2, 3], "eudate_cr": [2, 3], "09t05": 2, "03zdate_issu": 2, "03zdate_modifi": 2, "03zgeospatial_lat_max": 2, "147938geospatial_lat_min": 2, "1426geospatial_lat_resolut": 2, "02496149999999986geospatial_lat_unit": 2, "degrees_northgeospatial_lon_max": [2, 3], "359": [2, 3], "98487geospatial_lon_min": 2, "000499geospatial_lon_resolut": 2, "02909299999999604geospatial_lon_unit": 2, "degrees_eastgeospatial_vertical_max": [2, 3], "0geospatial_vertical_min": [2, 3], "0geospatial_vertical_posit": [2, 3], "downgeospatial_vertical_resolut": [2, 3], "pointgeospatial_vertical_unit": [2, 3], "mhistori": [2, 3], "03z": 2, "creationinstitut": [2, 3], "cl": [2, 3], "cneskeyword": [2, 3], "topographi": [2, 3], "heightkeywords_vocabulari": [2, 3], "netcdf": [2, 3], "coard": [2, 3], "climat": [2, 3], "forecast": [2, 3], "standard": [2, 3], "nameslicens": [2, 3], "web": [2, 3], "commit": [2, 3], "licenc": [2, 3], "phpplatform": [2, 3], "orbitprocessing_level": 2, "l3product_vers": [2, 3], "vdec2021project": [2, 3], "environ": [2, 3], "monitor": [2, 3], "refer": [2, 3], "eusoftware_vers": [2, 3], "7": [2, 3, 4], "0_duacs_dt2021_baselinesourc": [2, 3], "measurementsssalto_duacs_com": [2, 3], "mission": [2, 3], "inter": [2, 3], "calibr": [2, 3], "topex": [2, 3], "poseidon": [2, 3], "between": [2, 3], "2002": [2, 3], "23": [2, 3, 4], "24": [2, 3, 4], "2008": [2, 3], "18": [2, 3, 4], "2016": [2, 3], "25": [2, 3, 4], "sinc": [2, 3], "standard_name_vocabulari": [2, 3], "metadata": [2, 3], "tabl": [2, 3], "v37summari": [2, 3], "altimetri": [2, 3], "over": [2, 3], "66746stime_coverage_end": 2, "27ztime_coverage_resolut": 2, "p1stime_coverage_start": [2, 3], "25ztitl": 2, "along": [2, 3], "track": [2, 3], "l3": [2, 3], "2d": [2, 3], "map": [2, 3], "bin_siz": [2, 3, 4], "sel": [2, 3, 4], "08": [2, 3, 4], "assign": [2, 3, 4], "load": [2, 3, 4], "drop_var": [2, 3, 4], "to_datafram": [2, 3, 4], "groupbi": [2, 3, 4], "mean": [2, 3, 4], "to_xarrai": [2, 3, 4], "plot": [2, 4], "matplotlib": [2, 3, 4], "collect": [2, 4], "quadmesh": [2, 3, 4], "0x7f69693e2710": [], "multirun": [2, 3], "true": [2, 3, 4], "835": [], "launch": [2, 3], "job": [2, 3, 4], "alg": [2, 3], "926": [], "h2ag": [2, 3], "017": [], "018": [], "107": 3, "108": [3, 4], "j2n": [2, 3], "198": [], "199": [3, 4], "j3": [2, 3], "341": [], "s3a": [2, 3], "437": [], "store": 2, "repo": 2, "url": 2, "conveni": 2, "dc_repo": 2, "pretti": 2, "print": [2, 3, 4], "l": 2, "r": [2, 3], "tree": 2, "fromfil": 2, "clone": [2, 4], "obj": [2, 4], "count": [2, 4], "538": [], "13obj": [], "compress": [2, 4], "object": [2, 4], "288": [], "34m": 2, "34mmetric": 2, "lambdax_4dvarnet": 2, "json": [2, 3, 4], "lambdax_duac": 2, "mu_4dvarnet": 2, "mu_duac": 2, "34mprepar": 2, "34minput": 2, "34mmethod_output": 2, "4dvarnet_on_track": 2, "duacs_on_track": 2, "psd_4dvarnet": 2, "psd_duac": 2, "34mref": 2, "c2": [2, 3, 4], "directori": 2, "get": [2, 3, 4], "11mb": 2, "353305": 2, "3mb": 2, "01t22": 2, "975349760": 2, "2018": [2, 3], "78000": 2, "p23h18m50": 2, "723265": 2, "01t23": [2, 3], "21z": 2, "01t00": [2, 3], "30z": 2, "altika": 2, "drift": 2, "phase": 2, "al": 2, "353305coordin": 2, "031349760": 2, "21": [2, 3, 4], "087350016": 2, "31t14": 2, "678193152": 2, "678193408": 2, "70": [2, 3, 4], "mib": [2, 3], "673": 2, "86207": 2, "143350016": 2, "199350016": 2, "255349760": 2, "311349760": 2, "367349760": 2, "423349760": 2, "479349760": 2, "31": [2, 3, 4], "03": [2, 3, 4], "05": [2, 3, 4], "08t13": 2, "36zdate_issu": 2, "36zdate_modifi": 2, "36zgeospatial_lat_max": 2, "81": [2, 3, 4], "509018geospatial_lat_min": 2, "77": [2, 3, 4], "038071geospatial_lat_resolut": 2, "052618500000001234geospatial_lat_unit": 2, "998917geospatial_lon_min": 2, "012548geospatial_lon_resolut": 2, "017998999999988996geospatial_lon_unit": 2, "36z": 2, "phaseprocessing_level": 2, "723265stime_coverage_end": 2, "21ztime_coverage_resolut": 2, "30ztitl": 2, "0x7f69685a1fd0": [], "test": 2, "assert_allclos": 2, "open_dataset": 2, "success": 2, "overview": [2, 3], "credenti": [2, 3], "sla_filt": [2, 3], "mdt": [2, 3], "basic": [2, 3], "sat_id": [2, 3], "specif": [2, 3], "each": [2, 3], "sat_list": [2, 3], "max": [2, 3], "_": [2, 3], "bound": [2, 3], "chang": [2, 3], "cd": [2, 3], "conf": [2, 3], "overrid": [2, 3], "my_conf": [2, 3], "str": [2, 3], "id": [2, 3], "place": [2, 3], "holder": [2, 3], "min_tim": [2, 3, 4], "tempor": [2, 3], "domain": [2, 3], "max_tim": [2, 3, 4], "end": [2, 3], "min_lon": [2, 3, 4], "lower": [2, 3], "longitudin": [2, 3], "max_lon": [2, 3, 4], "upper": [2, 3], "min_lat": [2, 3, 4], "latitudin": [2, 3], "max_lat": [2, 3, 4], "python_interfac": [2, 3], "misc": [2, 3], "verbos": [2, 3], "displai": [2, 3], "to_run": [2, 3, 4], "group": [2, 3], "compos": [2, 3], "those": [2, 3], "option": [2, 3], "dc_ose_2021_inference_data": [2, 3], "arg": [2, 3], "__placehold": [2, 3], "anyth": [2, 3], "foo": [2, 3], "bar": [2, 3], "valu": [2, 3], "54": [2, 3, 4], "_target_": [2, 3], "_partial_": [2, 3], "dataset_id": [2, 3], "cmems_get": [2, 3], "duacs_l3": [2, 3], "regex": [2, 3], "month_regex_from_d": [2, 3], "output_directori": [2, 3], "force_download": [2, 3], "overwrite_output_data": [2, 3], "input_path": [2, 3], "glob": [2, 3, 4], "iglob": [2, 3], "pathnam": [2, 3], "root_dir": [2, 3], "null": [2, 3], "dir_fd": [2, 3], "recurs": [2, 3], "include_hidden": [2, 3], "fals": [2, 3], "output_path": [2, 3], "preprocess_track": [2, 3], "sort_path": [2, 3], "power": [2, 3], "cc": [2, 3], "view": [2, 3], "185": [3, 4], "debug": 2, "186": [], "fetch": 2, "server": 2, "dataset_url": 2, "retriev": 2, "uniqu": 2, "identifi": 2, "dataset_vers": 2, "forc": 2, "dataset_part": 2, "usernam": 2, "authent": 2, "password": 2, "no_directori": 2, "bool": 2, "organ": 2, "show_outputnam": 2, "union": 2, "pathlib": 2, "path": 2, "where": [2, 3], "save": [2, 3, 4], "credentials_fil": 2, "contain": 2, "skip": 2, "confirm": 2, "befor": 2, "overwrit": 2, "output": [2, 3, 4], "request_fil": 2, "request": [2, 3], "overwrite_metadata_cach": 2, "cach": 2, "no_metadata_cach": 2, "filter": 2, "regular": 2, "express": 2, "file_list": 2, "A": [2, 4], "text": [2, 3, 4], "filenam": 2, "line": 2, "must": 2, "match": 2, "absolut": 2, "create_file_list": 2, "onli": 2, "creat": 2, "target": 2, "instead": 2, "them": 2, "It": 2, "write": 2, "current": 2, "other": [2, 3], "action": 2, "perform": 2, "index_part": 2, "insitu": 2, "temporari": 2, "sync": 2, "synchron": 2, "remot": 2, "sync_delet": 2, "delet": 2, "ar": 2, "present": 2, "return": 2, "open": 2, "multifil": 2, "contaten": 2, "sequenc": 2, "callabl": 2, "function": 2, "whether": 2, "sort": 2, "concaten": 2, "dc_ose_2021": 3, "input_data": 3, "cfg": [2, 3, 4], "p": [2, 3, 4], "packag": [2, 3, 4], "help": 3, "prepar": [3, 4], "satellit": 3, "execut": 3, "list": 3, "dry": [3, 4], "preprocess": 3, "mkdir": 3, "writefil": 3, "s3b": 3, "2019": 3, "180": 3, "90": [3, 4], "bash": [3, 4], "m": 3, "searchpath": 3, "43": [2, 3, 4], "802": [], "899": 3, "900": [], "998": 3, "999": [], "096": [], "097": [], "194": [], "launcher": 3, "joblib": 3, "n_job": 3, "764": [], "parallel": 3, "backend": 3, "loki": 3, "prefer": 3, "process": 3, "timeout": 3, "pre_dispatch": 3, "batch_siz": 3, "auto": 3, "temp_fold": 3, "max_nbyt": 3, "mmap_mod": 3, "sweep": 3, "dir": 3, "749": [], "750": [], "47z": [], "086": [], "430": [], "431": 3, "27it": 4, "68it": 3, "700": [], "65": [3, 4], "26it": [3, 4], "808": [], "822": [], "863": [], "042": [], "059": 2, "01z": [], "337": [], "374": [], "806": [], "807": [], "74it": 3, "679": [], "92": [3, 4], "25it": 3, "9": [3, 4], "82it": 3, "23it": [], "922": [], "923": [], "428": [], "442": [], "489": 3, "505": [], "panda": [3, 4], "pd": [3, 4], "ob": [3, 4], "hvplot": 3, "to_plot": 3, "to_datetim": 3, "16": [2, 3, 4], "hvfig": 3, "kind": 3, "geo": [3, 4], "coastlin": 3, "width": 3, "cmap": 3, "rdylbu_r": 3, "bokfig": 3, "render": 3, "gist": [3, 4], "2d034392ee9b385fb4de3c8628bfc844": [3, 4], "aaeaed8ce5a1559507be8dd52e37c134f777192c": 3, "patcher_oi_torch": [3, 4], "py": [3, 4], "resolv": [3, 4], "133": [3, 4], "110": [3, 4], "connect": [3, 4], "443": [3, 4], "sent": [3, 4], "await": [3, 4], "respons": [3, 4], "200": [3, 4], "ok": [3, 4], "4242": 3, "1k": [3, 4], "plain": [3, 4], "kb": [3, 4], "14k": 3, "mb": [3, 4], "functool": [3, 4], "partial": [3, 4], "xrpatcher": [3, 4], "xrdapatch": [3, 4], "oi": [3, 4], "outgrid": [3, 4], "outgrid_da": [3, 4], "dataarrai": [3, 4], "dim": [3, 4], "coord": [3, 4], "dict": [3, 4], "date_rang": [3, 4], "arang": [3, 4], "patcher_cl": [3, 4], "patch": [3, 4], "80": [2, 3], "120": 3, "stride": [3, 4], "to_timedelta": [3, 4], "7d": [3, 4], "lx": [3, 4], "ly": [3, 4], "nois": [3, 4], "obs_dt": [3, 4], "obs_dx": [3, 4], "obs_di": [3, 4], "devic": [3, 4], "cuda": [3, 4], "86": [3, 4], "32it": 3, "94it": [3, 4], "62it": 3, "30it": [3, 4], "04it": 4, "8": [3, 4], "73it": 3, "36it": [3, 4], "88it": [3, 4], "55it": [3, 4], "40it": [], "08it": 3, "05it": [3, 4], "16it": 3, "09it": [3, 4], "18it": 3, "19it": [3, 4], "17it": [3, 4], "14it": 3, "21it": 3, "20it": 3, "10it": 3, "33": [2, 3, 4], "02it": [3, 4], "34": [3, 4], "58": [3, 4], "42it": 4, "42": [2, 3, 4], "50it": 3, "77it": 4, "86it": [3, 4], "56it": [3, 4], "52it": 3, "89it": [3, 4], "72it": 3, "39it": [3, 4], "12it": [3, 4], "34it": [3, 4], "57": [3, 4], "83it": [3, 4], "78it": [], "60": [3, 4], "61it": 4, "61": [3, 4], "49it": 3, "62": [3, 4], "37it": [], "63": [3, 4], "53it": [3, 4], "64": [2, 3, 4], "57it": [3, 4], "44it": [3, 4], "67": [3, 4], "68": [2, 3, 4], "69": [3, 4], "00it": 3, "71": [3, 4], "22it": 3, "72": [3, 4], "80it": [3, 4], "73": [3, 4], "74": [3, 4], "75": [3, 4], "81it": 4, "76": 3, "11it": [3, 4], "78": [3, 4], "79": [3, 4], "43it": 3, "82": [3, 4], "65it": 3, "83": 3, "85": [3, 4], "97it": [3, 4], "31it": 3, "87": 3, "88": [3, 4], "89": [3, 4], "51it": 3, "47it": [3, 4], "91": 3, "93": [3, 4], "94": 3, "95": [3, 4], "96": [3, 4], "41it": [3, 4], "97": [3, 4], "98": 3, "99": [3, 4], "06it": [3, 4], "101": 3, "79it": [3, 4], "102": [2, 3, 4], "48it": 3, "103": 3, "104": 3, "29it": [3, 4], "105": 3, "106": 3, "63it": [3, 4], "global_land_mask": 3, "globe": 3, "lon_grid": 3, "lat_grid": 3, "meshgrid": 3, "globe_ocean_mask": 3, "is_ocean": 3, "out_plot": 3, "pipe": [3, 4], "lambda": 3, "ocn_tool": [3, 4], "_src": [3, 4], "geoprocess": [3, 4], "geostroph": [3, 4], "valid": 3, "val": 3, "ab": 3, "to_dataset": [3, 4], "validate_latlon": 3, "geostrophic_veloc": [3, 4], "kinetic_energi": [3, 4], "ke": [3, 4], "viridi": 3, "clim": 3, "raid": 3, "localscratch": 3, "qfebvr": 3, "lib": 3, "python3": 3, "site": 3, "pint": 3, "facet": 3, "quantiti": 3, "runtimewarn": 3, "divid": 3, "zero": 3, "encount": 3, "magnitud": 3, "magnitude_op": 3, "new_self": 3, "_magnitud": 3, "study_path": [3, 4], "method_output": [3, 4], "study_var": [3, 4], "global_ev": 3, "361": [], "476": [], "_03_interp_on_track": [3, 4], "_04_1_lambdax": [3, 4], "_04_2_mu": [3, 4], "477": [], "1d": [3, 4], "out_grid": 3, "pad": 3, "mode": 3, "edg": 3, "assign_coord": 3, "to_netcdf": [3, 4], "289": [], "878": [], "403": [], "469": [], "470": [], "584": [], "596": [], "interp_on_track": [3, 4], "654": [], "655": [], "lambdax": [3, 4], "763": [], "effect": [3, 4], "interpol": 3, "score": [3, 4], "181": 3, "772": [], "773": [], "mu": [3, 4], "809": [], "9254379997056986": [], "concat": [3, 4], "read_json": [3, 4], "typ": [3, 4], "seri": [1, 3, 4], "to_markdown": [3, 4], "lambda_x": [3, 4], "949": [], "925438": [], "more": 4, "detail": 4, "oceanbench": 1, "08obj": [], "gitignor": 4, "b": 4, "inpu0": 4, "454k": 4, "19file": [], "inp0": 4, "48m": 4, "22m": 4, "65m": 4, "39m": 4, "703k": 4, "0x7f5c59914d90": [], "2d034392ee9b385fb4de3c8628bfc8cache44": 4, "4afecfce184a6e668def7ec3a99cb6cd4d612bdc": 4, "111": 3, "4247": 4, "15k": 4, "93it": [3, 4], "13it": [3, 4], "70it": [], "07it": [3, 4], "99it": [2, 3, 4], "96it": 4, "95it": 3, "91it": [3, 4], "92it": 3, "85it": 3, "35it": 3, "28it": 3, "98it": [3, 4], "75it": [3, 4], "03it": [3, 4], "01it": [3, 4], "isel": 4, "slice": 4, "col": 4, "col_wrap": 4, "figsiz": 4, "facetgrid": 4, "0x7f5b55440890": [], "ref": 4, "o": 4, "204": [], "962": [], "963": [], "203": [], "143": [3, 4], "213": [], "214": [], "252": [], "8818722045815395": 4, "366": 4, "881872": 4, "aw": 4, "cp": 4, "melodi": 4, "quentin_cloud": 4, "ocb_oi_demo": [], "acl": 4, "read": 4, "gtoken": [], "checkout": [], "echo": [], "toml": [], "oi_demo": [], "west": [], "wasabisi": [], "var": [], "submiss": [], "cat": [], "pull": [], "compar": [], "expand": [], "220": [], "318": [], "319": [], "416": [], "417": [], "514": [], "069": [], "041": [], "063": [], "10t16": [], "466": [], "694": [], "455": [], "844": [], "914": [], "937": [], "499": [], "513": [], "820": [], "173": [], "18z": [], "302": [], "682": [], "609": [], "58it": 3, "545": [], "546": [], "360": [], "277": [], "325": [], "extens": 3, "figur": [], "933": [], "333x933": [], "333": [], "ax": [], "66it": [], "15it": [], "87it": [3, 4], "90it": [3, 4], "33it": [3, 4], "84it": 3, "54it": [], "59it": [], "45it": 3, "69it": [3, 4], "38it": 3, "60it": 3, "67it": 3, "980": [], "095": [], "689": [], "235": [], "641": [], "243": [], "309": [], "320": [], "321": [], "377": [], "378": [], "483": [], "493": [], "528": 3, "388": 4, "38z": [], "781": [], "782": [], "434": 3, "465": [], "0x7f73e249ca90": [], "967": [], "058": [], "151": [2, 3], "241": 2, "332": [], "524": [], "525": [], "526": [], "625": [], "566": [], "310": [], "18kobj": [], "0x7f73e23e2050": [], "927": [], "637": 3, "736": [], "737": [], "934": [], "032": [], "583": [], "569": 2, "570": [], "573": [], "579": [], "28z": [], "970": [], "29z": [], "223": [], "224": [], "543": [], "867": [], "868": [], "618": [], "094": [], "839": [], "944": [], "965": [], "394": [], "409": [], "traceback": [], "most": [], "recent": [], "call": [], "last": [], "_intern": [], "util": [], "run_and_report": [], "func": [], "162": 3, "ret": [], "sweeper": [], "argument": [], "task_overrid": [], "core_plugin": [], "basic_sweep": [], "177": [], "result": [], "self": [], "batch": [], "initial_job_idx": [], "hydra_plugin": [], "hydra_joblib_launch": [], "joblib_launch": [], "_core": [], "joblib_cfg": [], "2007": [], "__call__": [], "return_gener": [], "els": [], "1650": [], "_get_output": [], "yield": [], "_retriev": [], "1754": [], "_raise_error_fast": [], "1789": [], "error_job": [], "get_result": [], "745": [], "_return_or_rais": [], "rais": [], "_result": [], "extern": [], "process_executor": [], "terminatedworkererror": [], "worker": [], "manag": [], "executor": [], "unexpectedli": [], "termin": [], "could": [], "caus": [], "segment": [], "fault": [], "excess": [], "memori": [], "system": [], "kill": [], "sigterm": [], "multiprocess": [], "resource_track": [], "userwarn": [], "There": [], "appear": [], "leak": [], "semaphor": [], "clean": [], "up": [], "shutdown": [], "warn": [], "calledprocesserror": [], "get_ipython": [], "run_cell_mag": [], "core": [], "interactiveshel": [], "2541": [], "magic_nam": [], "2539": [], "builtin_trap": [], "2540": [], "magic_arg_": [], "fn": [], "kwarg": [], "2543": [], "prevent": [], "being": [], "2544": [], "when": [], "magic": [], "decor": [], "output_can_be_silenc": [], "2545": [], "token": [], "2546": [], "getattr": [], "magic_output_can_be_silenc": [], "script": [], "155": 3, "scriptmag": [], "_make_script_mag": [], "named_script_mag": [], "153": 3, "154": 3, "shebang": [], "315": 4, "raise_error": [], "returncod": [], "311": [], "still": [], "312": [], "yet": [], "seen": [], "its": [], "wait": [], "313": [], "stuck": [], "uninterrupt": [], "sleep": [], "sigkil": [], "314": [], "rc": [], "command": [], "non": [], "statu": [], "inlin": 3, "04obj": [], "46file": [], "prepare2": [], "53m": [], "0mb": [], "48file": [], "0x7f9a5747fed0": [], "76it": [], "0x7f995aacda50": [], "098": [], "826": [], "827": [], "009": [], "045": [], "152": 3, "251": [], "350": 3, "351": [], "449": [], "093": [], "34z": [], "425": [], "426": [], "685": [], "35z": [], "065": [], "548": [], "461": [], "462": [], "531": [], "532": [], "539": 2, "540": [], "889": [], "734": [], "555": [], "571": [], "765": [], "167mb": 3, "5217445": 3, "42mb": 3, "307290112": 3, "201": 3, "1394167": 3, "p22h56m25": 3, "547915": 3, "11z": 3, "46z": 3, "cryosat": 3, "ss": 3, "5217445coordin": 3, "250690048": 3, "194090240": 3, "30t23": 3, "569176832": 3, "569176576": 3, "1531752": 3, "137489920": 3, "080889856": 3, "024290048": 3, "967690240": 3, "911089920": 3, "854489856": 3, "797890048": 3, "09t08": 3, "37zdate_issu": 3, "37zdate_modifi": 3, "37zgeospatial_lat_max": 3, "51995099999999geospatial_lat_min": 3, "263183geospatial_lat_resolut": 3, "05637649999999894geospatial_lat_unit": 3, "989293geospatial_lon_min": 3, "003283geospatial_lon_resolut": 3, "006813000000011726geospatial_lon_unit": 3, "37z": 3, "2processing_level": 3, "547915stime_coverage_end": 3, "11ztime_coverage_resolut": 3, "46ztitl": 3, "643": [], "644": [], "419": 2, "692": [], "829": [], "067": [], "079": [], "080": [], "142": [2, 3], "256": [], "266": [], "267": [], "307": [], "9249225777323533": [], "355": [], "924923": [], "771": [], "870": [], "968": 2, "623": [], "603": [], "626": 3, "638": 3, "639": 3, "17z": [], "387": [], "869": [], "236": [], "411": [], "412": [], "793": [], "959": [], "960": 2, "651": [], "670": [], "287": [], "303": [], "1000": 3, "189": [], "385": [], "386": [], "484": [], "581": [], "146": 3, "140": 3, "48z": [], "062": [], "345": [], "711": [], "286": [], "718": [], "731": 2, "911": [], "932": [], "472": [], "696": [], "796": [], "895": [], "896": [], "994": [], "thread": [], "541": [], "563": 3, "02z": [], "218": [], "219": [], "497": [], "816": [], "279": [], "027": [], "324": [], "372": [], "003": [], "019": [], "233": [], "331": 2, "529": [], "190": [], "208": [], "222": [], "228": [], "23z": [], "755": [], "24z": [], "191": [], "498": [], "717": [], "511": [], "698": [], "456": 3, "335": [], "851": 3, "875": [], "876": [], "517": 3, "924": [], "24it": 3, "112": 3, "113": 3, "114": 3, "117": 3, "118": 3, "119": 3, "121": 3, "122": 3, "123": 3, "124": 3, "125": 3, "126": 3, "127": 3, "128": 3, "129": 3, "130": 3, "131": 3, "132": 3, "134": 3, "135": 3, "136": 3, "137": 3, "138": 3, "139": 3, "141": 3, "144": 3, "145": 3, "147": 3, "148": 3, "149": 3, "150": 3, "156": 3, "157": 3, "158": 3, "159": 3, "160": 3, "161": 3, "768": [], "769": [], "704": [], "263": [], "10t17": [], "10z": [], "761": [], "762": [], "647": [], "715": [], "726": [], "727": [], "783": [], "784": [], "887": [], "897": [], "898": [], "9253623867145405": 3, "925362": 3, "error": [], "pars": [], "miss": [], "equal": [], "eof": [], "see": [], "advanc": [], "override_grammar": [], "hydra_full_error": [], "complet": [], "stack": [], "trace": [], "812": [], "11t07": [], "20z": [], "205": [], "0x7f7a2331f590": [], "404": [], "590": [], "591": [], "683": [], "775": [], "776": [], "919": [], "920": [], "015": [], "608": [], "346": [], "01kobj": [], "951obj": [], "0x7f7a1a9069d0": [], "877": [], "12obj": [], "03kobj": [], "13file": [], "0x7f8207833ed0": [], "0x7f810aa77210": [], "216": [], "070": [], "188": [], "090": [], "11t08": [], "49z": [], "602": [], "039": [], "typeerror": [], "accessor": [], "dataarrayplotaccessor": [], "wrap": [], "dataarray_plot": [], "__doc__": [], "__annotations__": [], "def": [], "ani": [], "_da": [], "282": [], "darrai": [], "row": [], "hue": [], "subplot_kw": [], "plotfunc": [], "281": 3, "ndim": [], "No": [], "numer": [], "283": [], "284": [], "613": [], "712": [], "713": [], "811": [], "910": [], "008": [], "577": [], "568": [], "586": [], "589": [], "32z": [], "33z": [], "175": [], "536": [], "686": [], "687": [], "269": [], "270": [], "648": [], "649": [], "075": [], "982": [], "300": [], "491": 3, "492": [], "339": [], "356": [], "650": [], "888": [], "328": [], "871": [], "872": [], "973": [], "030": [], "031": [], "182": [], "183": 2, "10obj": 2, "02kobj": [], "18file": 4, "0x7fcc03f9fe50": [], "0x7fcb0773b290": [], "881": [], "882": [], "817": [], "818": 3, "856": [], "171": [], "04z": [], "510": [], "542": [], "0x7f1704860550": [], "344": [], "530": 3, "674": [], "675": [], "97obj": [], "41kobj": [], "0x7f16fef46690": [], "778": [], "779": [], "972": [], "621": [], "636": [], "646": [], "699": [], "55z": 2, "278": [], "587": [], "547": [], "187": [], "729": [], "936": [], "496": [], "_remotetraceback": [], "463": [], "_process_work": [], "call_item": [], "291": [], "598": [], "listcomp": [], "execute_job": [], "run_job": [], "return_valu": [], "task_funct": [], "task_cfg": [], "hydra_zen": [], "wrapper": [], "_implement": [], "427": [], "__init__": [], "2298": [], "ignor": [], "mypi": [], "cannot": [], "overload": [], "api": [], "1348": [], "writer": [], "common": [], "297": [], "delayed_stor": [], "chunkmanag": [], "namedarrai": [], "daskmanag": [], "249": [], "1236": [], "compute_as_if_collect": [], "store_dsk": [], "map_kei": [], "369": [], "schedul": [], "dsk2": [], "kei": [], "get_async": [], "501": [], "res_info": [], "fail": [], "queue_get": [], "queue": [], "not_empti": [], "waiter": [], "acquir": [], "keyboardinterrupt": [], "abov": [], "except": [], "direct": [], "bin": [], "modul": [], "sy": [], "main": [], "decorated_main": [], "_run_hydra": [], "_run_app": [], "09obj": [], "10kobj": [], "28file": [], "57file": [], "0x7f198bb57090": [], "0x7f188fb053d0": [], "534": [], "535": [], "371": [], "384": [], "395": [], "432": [], "433": 4, "298": [], "08z": 3, "669": [], "507": [], "0x7ff1428f74d0": [], "917": [], "192": [], "193": [], "522": [], "02obj": [], "572": [], "09kobj": [], "08kobj": [], "0x7ff140f998d0": [], "446": 3, "257": [], "452": [], "58z": [], "544": [], "902": [], "903": [], "473": [], "467": [], "831": [], "559": [], "952": [], "024": [], "739": [], "43z": [], "905": [], "906": [], "209": [], "084": [], "272": [], "99obj": [], "05kobj": [], "12kobj": [], "65file": [], "40file": [], "0x7f19c57751d0": [], "0x7f19c57fb710": [], "509": [], "414": [], "304": [], "523": [], "620": [], "719": [], "815": [], "471": [], "500": [3, 4], "506": [], "11t09": [], "913": 3, "31z": [], "221": [], "767": [], "996": [], "997": [], "834": [], "848": [], "942": [], "950": [], "954": [], "060": 2, "15z": [], "044": [], "347": [], "348": [], "oost": [0, 1, 3], "come": 1, "book": 1, "datachalleng": 1, "15t15": [2, 3], "680": 3, "oost_dc_ose_2021": [2, 3, 4], "379": [], "420": 2, "0x7f33fc555390": [], "961": [], "051": [], "31merror": [], "scm": [], "tmp": [], "tmpwnazsii0dvc": [], "oserror": [], "1021": [], "compat": [], "engin": [], "data_var": [], "join": [], "attrs_fil": [], "combine_attr": [], "1018": [], "_find_absolute_path": [], "1020": [], "1023": [], "1024": [], "isinst": [], "627": 3, "723": 3, "819": 3, "490": 3, "502": 3, "503": 3, "07z": 3, "202": 3, "786": 3, "787": 3, "601": 3, "402": 3, "370": 3, "550": 3, "294": 3, "721": 3, "738": 3, "642": 3, "231": 3, "232": 3, "53z": 3, "488": 3, "445": 3, "512": 3, "628": 3, "tmpk0w3u33pdvc": [], "oost_oi_demo": 4, "tmp7lqtz3andvc": [], "usageerror": [], "found": [], "tmpclwy32acdvc": [], "syntaxerror": [], "invalid": [], "syntax": [], "tmpfjudv_3gdvc": [], "025": 2, "0x7fc7f1e03950": 2, "330": 2, "0x7fc8345fec10": 2, "732": 2, "20obj": 4, "73file": 4, "0x7efe20295650": 4, "0x7efd27b9cb90": 4, "552": 4, "316": 4, "397": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"setup": 0, "instal": 0, "conda": 0, "environ": 0, "without": [0, 2], "clone": 0, "With": 0, "On": [0, 1], "colab": 0, "credenti": 0, "need": 0, "reproduc": [0, 2], "demo": 0, "notebook": 0, "cmem": 0, "fetch": [0, 4], "sourc": 0, "data": [0, 1, 2, 3, 4], "from": 0, "copernicu": 0, "portal": 0, "aw": 0, "push": 0, "prepar": [0, 2], "cloud": 0, "storag": 0, "upload": 0, "method": [0, 4], "result": [0, 4], "leaderboard": [0, 4], "submiss": 0, "github": 0, "creat": [0, 3], "pull": [0, 4], "request": [0, 4], "repo": 0, "origin": 0, "fork": 0, "oceanbench": [], "datachalleng": [2, 3, 4], "overal": 1, "present": 1, "background": 1, "shoulder": 1, "giant": 1, "featur": 1, "showcas": 1, "contribut": 1, "access": [], "v2": [], "reus": [2, 3], "process": 2, "step": 2, "us": [2, 4], "configur": [2, 3, 4], "ocb": [], "dc_ose_2021": [2, 4], "input_data": 2, "pipelin": 2, "singl": 2, "satellit": 2, "dry": 2, "actual": 2, "execut": 2, "run": 2, "all": 2, "download": 2, "version": 2, "preprocess": 2, "list": 2, "content": 2, "input": [2, 3, 4], "visual": [2, 3, 4], "check": 2, "gener": 2, "v": 2, "more": 2, "usag": 2, "help": 2, "doc": 2, "implement": 3, "explor": 3, "global": 3, "usecas": 3, "differ": 3, "constel": 3, "novel": 3, "field": 3, "explan": 3, "write": 3, "new": 3, "file": 3, "particip": 4, "challeng": [1, 4], "appli": 4, "evalu": 4, "submit": 4, "my": 4, "basic": 4, "optim": 4, "interpol": 4, "refer": 4, "metric": 4, "make": 4, "your": 4, "reconstruct": 4, "public": 4, "through": 4, "http": 4, "link": 4, "branch": 4, "ad": 4, "i": 4, "automat": 4, "updat": 4, "commit": 4, "open": 4, "ocean": 1, "observ": 1, "scienc": 1, "toolkit": 1, "ssh": 1, "design": 1, "reproduct": 2, "oost": [2, 4]}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Reusing the datachallenge implementation for exploring global usecase with different constellation": [[3, "reusing-the-datachallenge-implementation-for-exploring-global-usecase-with-different-constellation"]], "Creating novel input data configuration": [[3, "creating-novel-input-data-configuration"]], "Visualizing the fields and their explanations": [[3, "visualizing-the-fields-and-their-explanations"]], "Writing new file": [[3, "writing-new-file"]], "Setup": [[0, "setup"]], "Installing the conda environment": [[0, "installing-the-conda-environment"]], "Without cloning": [[0, "without-cloning"]], "With cloning": [[0, "with-cloning"]], "On colab": [[0, "on-colab"]], "Credentials needed to reproduce the demo notebooks": [[0, "credentials-needed-to-reproduce-the-demo-notebooks"]], "CMEMS: to fetch source data from the copernicus portal": [[0, "cmems-to-fetch-source-data-from-the-copernicus-portal"]], "AWS: to push prepared data to cloud storage or upload method result for leaderboard submission": [[0, "aws-to-push-prepared-data-to-cloud-storage-or-upload-method-result-for-leaderboard-submission"]], "GITHUB: to create a leaderboard pull request on the repo (from the original or a fork)": [[0, "github-to-create-a-leaderboard-pull-request-on-the-repo-from-the-original-or-a-fork"]], "Ocean Observation Science Toolkit: SSH Data challenge Design": [[1, "ocean-observation-science-toolkit-ssh-data-challenge-design"]], "Overall presentation": [[1, "overall-presentation"]], "Background: On the shoulder of Giants:": [[1, "background-on-the-shoulder-of-giants"]], "Feature Showcase": [[1, "feature-showcase"]], "Contributing": [[1, "contributing"]], "Versioned data download and reproduction": [[2, "versioned-data-download-and-reproduction"]], "Reusing processing steps and reproducing data preparation": [[2, "reusing-processing-steps-and-reproducing-data-preparation"]], "Use the configured oost-dc_ose_2021-input_data pipeline": [[2, "use-the-configured-oost-dc-ose-2021-input-data-pipeline"]], "Reproduce processing of single satellite": [[2, "reproduce-processing-of-single-satellite"]], "Dry (without actual execution) run for all satellites": [[2, "dry-without-actual-execution-run-for-all-satellites"]], "Downloading versioned and preprocessed data": [[2, "downloading-versioned-and-preprocessed-data"]], "Listing datachallenge content": [[2, "listing-datachallenge-content"]], "Downloading prepared input data": [[2, "downloading-prepared-input-data"]], "Visualize input data": [[2, "visualize-input-data"]], "Checking generated data VS downloaded": [[2, "checking-generated-data-vs-downloaded"]], "More on pipeline usage (help, doc, \u2026)": [[2, "more-on-pipeline-usage-help-doc"]], "Participating to the data challenge: applying, evaluating and submitting a method": [[4, "participating-to-the-data-challenge-applying-evaluating-and-submitting-a-method"]], "Fetching the input data": [[4, "fetching-the-input-data"]], "Applying my method: Basic optimal interpolation": [[4, "applying-my-method-basic-optimal-interpolation"]], "Visualize results": [[4, "visualize-results"]], "Evaluate": [[4, "evaluate"]], "Fetch reference data": [[4, "fetch-reference-data"]], "Use the configured oost-dc_ose_2021-metrics": [[4, "use-the-configured-oost-dc-ose-2021-metrics"]], "Submit method to datachallenge": [[4, "submit-method-to-datachallenge"]], "Make your reconstruction public through a http link": [[4, "make-your-reconstruction-public-through-a-http-link"]], "Commit to a branch leaderboard/* adding your method": [[4, "commit-to-a-branch-leaderboard-adding-your-method"]], "Leaderboard is automatically updated": [[4, "leaderboard-is-automatically-updated"]], "Open your pull request": [[4, "open-your-pull-request"]]}, "indexentries": {}})