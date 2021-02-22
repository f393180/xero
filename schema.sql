create table opd_user(
    username varchar(15) NOT NULL PRIMARY KEY,
    password varchar(150),
    first_name varchar(15) NOT NULL,
    last_name varchar(15) NOT NULL,
    role varchar(15) NOT NULL
);

create table opd_bill(
    opd_bill_id SERIAL PRIMARY KEY,
    patient_first_name varchar(15),
    patient_last_name varchar(15),
    company_name varchar(50),
    street_address varchar(155),
    area varchar(50),
    consulting_charge integer NOT NULL DEFAULT 0,
    medication_charge integer NOT NULL DEFAULT 0,
    dressing_charge integer NOT NULL DEFAULT 0,
    other_charge integer NOT NULL DEFAULT 0,
    bill_status varchar(10) NOT NULL DEFAULT 'DRAFT',
    bill_date varchar(11),
    created_on timestamp without time zone NOT NULL,
    created_by varchar(15) NOT NULL,
    updated_on timestamp without time zone NOT NULL,
    updated_by varchar(15) NOT NULL
);

create table opd_bill_history(
    opd_bill_id integer NOT NULL,
    patient_first_name varchar(15),
    patient_last_name varchar(15),
    company_name varchar(50),
    street_address varchar(155),
    area varchar(50),
    consulting_charge integer NOT NULL DEFAULT 0,
    medication_charge integer NOT NULL DEFAULT 0,
    dressing_charge integer NOT NULL DEFAULT 0,
    other_charge integer NOT NULL DEFAULT 0,
    bill_status varchar(10) NOT NULL DEFAULT 'DRAFT',
    bill_date varchar(11),
    updated_on timestamp without time zone NOT NULL,
    updated_by varchar(15) NOT NULL
);