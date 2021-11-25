CREATE TABLE IF NOT EXISTS users (id_contact INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT, name_town TEXT, id_country INTEGER, name_country TEXT, code TEXT, username TEXT, password TEXT, id_exporter INTEGER, id_buyer INTEGER, id_farmer INTEGER, id_supchain_type INTEGER, id_user_supchain_type INTEGER, supchain_type TEXT, user_supchain_type TEXT, id_user INTEGER, id_company INTEGER, name TEXT, id_town INTEGER, idview TEXT, id_cooperative INTEGER, downline INTEGER, active INTEGER, pwd_reset INTEGER, salt TEXT, contact_code TEXT, p_email3_pwd TEXT, p_email3 TEXT, firstname TEXT, lastname TEXT, p_email TEXT, p_phone TEXT, id_primary_company INTEGER, pcompany_name TEXT, password_2 TEXT, admin TEXT, agent_type INTEGER, log INTEGER, lang TEXT, save_login INTEGER);
CREATE TABLE IF NOT EXISTS agent_deployment (id_agent_deployment INTEGER PRIMARY KEY AUTOINCREMENT, id_town INTEGER, name_town TEXT, id_country INTEGER, name_country TEXT, code_town TEXT, region1 TEXT, region2 TEXT, region3 TEXT, region4 TEXT, id_external INTEGER, id_project INTEGER, project_name TEXT, id_group INTEGER, group_name TEXT, id_agent INTEGER, agent_name TEXT, agent_or_group INTEGER, aog_name TEXT);
CREATE TABLE IF NOT EXISTS towns (gid_town INTEGER PRIMARY KEY AUTOINCREMENT, name_town TEXT, name_country TEXT, x REAL, y REAL, id_country INTEGER, timezone TEXT, population INTEGER, photo_link TEXT, description_en TEXT, description_fr TEXT, description_de TEXT, description_pt TEXT, description_es TEXT, code_town TEXT, region1 TEXT, region2 TEXT, region3 TEXT, region4 TEXT, iso TEXT, language TEXT, postcode TEXT, suburb TEXT, utc TEXT, dst TEXT, timezone1 TEXT, id_town INTEGER, old_id INTEGER, zone TEXT, region2_id INTEGER, id_code INTEGER, exporter_id INTEGER, inter_ngo_id INTEGER, local_ngo_id INTEGER, id_external INTEGER, exporter TEXT, intngo TEXT, localngo TEXT);
CREATE TABLE IF NOT EXISTS projects (id_project INTEGER PRIMARY KEY AUTOINCREMENT, id_language INTEGER, id_user INTEGER, username TEXT, project_name TEXT, project_type TEXT, start_date TEXT, due_date TEXT, end_date TEXT, project_status INTEGER, project_private TEXT, id_company INTEGER, id_culture INTEGER, ord_order_id INTEGER, country_id INTEGER, region_id INTEGER, region_quadrant TEXT, region_tile_status TEXT, region_tiles_by	TEXT, region_tiles TEXT, region_tile_server TEXT, project_mgr_id INTEGER, project_mgr_name TEXT, project_mgr_company_id INTEGER, id_country INTEGER, region_name TEXT, creation_date TEXT, modify_by TEXT, modified_date TEXT, cooperative_id INTEGER, zone_color TEXT, country_mgr_id INTEGER, language_id INTEGER, year_period INTEGER, certification_id INTEGER, task_type TEXT, task_status TEXT, project_active INTEGER, approved_date TEXT, approved_by TEXT, period TEXT, topic_id INTEGER);
CREATE TABLE IF NOT EXISTS project_task (id_task INTEGER PRIMARY KEY AUTOINCREMENT, survey_id INTEGER, scope_id INTEGER, scope_name TEXT, id_criteria INTEGER, topic_id INTEGER, topic_name TEXT, desc_en TEXT, desc_fr TEXT, desc_in TEXT, criteria_level INTEGER, media_yn TEXT, sv_answer_type_id INTEGER, civ1 TEXT, gh TEXT, in1 INTEGER, typedesc TEXT, range_to TEXT, range_from TEXT, answerlist_id INTEGER, sequence INTEGER);
CREATE TABLE IF NOT EXISTS certification_action (topic_id INTEGER, topic_name TEXT, desc_en TEXT, desc_fr TEXT, desc_in TEXT, action_type_id INTEGER, action_type_name TEXT, function_id INTEGER, function_name TEXT, action_code TEXT, trigger_id INTEGER, trigger_name TEXT, trigger_regvalue TEXT, trigger_regvalue_name TEXT, trigger_table TEXT, trigger_table_name TEXT, trigger_text TEXT, status TEXT, status_name TEXT);
CREATE TABLE IF NOT EXISTS scope_partner (id_scope_partner INTEGER PRIMARY KEY AUTOINCREMENT, id_scope INTEGER, scope_en TEXT, scope_fr TEXT, scope_in TEXT, id_contact INTEGER, contact_name TEXT, contact_code TEXT, id_country INTEGER, name_country TEXT, id_project INTEGER, name_project TEXT);
CREATE TABLE IF NOT EXISTS regvalues (id_regvalue INTEGER PRIMARY KEY AUTOINCREMENT, id_register INTEGER, nvalue INTEGER, cvalue TEXT, cvaluede TEXT, cvaluefr TEXT, cvaluept TEXT, cvaluees TEXT, dvalue TEXT, created_by TEXT, created_date TEXT, modified_by INTEGER, modified_date TEXT, sequence_nr INTEGER, comm TEXT, active TEXT, deleted TEXT, cvaluesw TEXT, cvalueit TEXT, cvalueind TEXT, com TEXT, comment TEXT);
CREATE TABLE IF NOT EXISTS data (id_data INTEGER PRIMARY KEY AUTOINCREMENT, data_type TEXT, data_date TEXT, data_download INTEGER, data_upload INTEGER, total_rows INTEGER);
CREATE TABLE IF NOT EXISTS sv_answers_def (sv_answers_def_id INTEGER PRIMARY KEY AUTOINCREMENT, id_criteria INTEGER, range_from TEXT, range_to TEXT, seq INTEGER, value_en TEXT, value_fr TEXT, value_po TEXT, value_es TEXT, value_in TEXT, a_number INTEGER, a_cat_number REAL, media_yn INTEGER, a_list_number INTEGER, a_list_name TEXT);
CREATE TABLE IF NOT EXISTS registers (id_register INTEGER PRIMARY KEY AUTOINCREMENT, regname TEXT, regcode TEXT, used_by_module TEXT, regnamede TEXT, regnamefr TEXT, regnamept TEXT, regnamees TEXT, regnamein TEXT);
CREATE TABLE IF NOT EXISTS sv_results (survey_response_id INTEGER PRIMARY KEY AUTOINCREMENT, action_type_id INTEGER, question_id INTEGER, criteria_id INTEGER, project_id INTEGER, scope_id INTEGER, partner_id INTEGER, town_id INTEGER, country_id INTEGER, a_list_number TEXT, a_number TEXT, sv_answers_def_id INTEGER, created_date TEXT, id_agent INTEGER, created_by TEXT, coordx REAL, coordy REAL, accuracy REAL, comment TEXT, completed INTEGER, completed_date TEXT, issue_id INTEGER, sync_to_server INTEGER, sync_to_server_date TEXT, action_item TEXT, action_status TEXT, id_action TEXT, media NUMBER, start_timestamp TEXT, end_timestamp TEXT, date_answer TEXT, number_answer TEXT, text_answer TEXT, grade_answer TEXT, yes_no_answer TEXT, list_answer TEXT, multiple_answer TEXT, survey INTEGER, issue INTEGER, survey_unique_id INTEGER, sv_answer_type_id INTEGER);
CREATE TABLE IF NOT EXISTS triggers_actions (trigger_id INTEGER, topic_id INTEGER, trigger_name TEXT);
CREATE TABLE IF NOT EXISTS task_scopes (scope_id INTEGER, id_project INTEGER, desc_en TEXT, desc_fr TEXT, desc_in TEXT);
CREATE TABLE IF NOT EXISTS documnts(id_doc INTEGER PRIMARY KEY AUTOINCREMENT, agent_id INTEGER, survey_unique_id INTEGER, doc_type INTEGER, doc_date TEXT, filename TEXT, description TEXT, coordx REAL, coordy REAL, accuracy REAL, heading REAL, altitude REAL, cloud_path TEXT, sync INTEGER);