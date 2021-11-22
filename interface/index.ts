export interface sourceObject  {
  title?: string;
  owner?: string;
  registered_date?: string;
  description?: string;
  serial_number?: string;
  registration_number?: string;
  trdemark_information?: string;
  classification?: string;
  Attorney?: string;
  first_user?: string;
  mark_identification?: any;
  party_name?: any;
  registration_date?: any;
}

export interface detailsObject  {
  owner?: string;
  registered_date?: string;
  serial_number?: string;
  registration_number?: string;
  classification?: string;
  attorney_name?: string;
  mark_identification?: any;
  party_name?: any;
  registration_date?: any;
  first_use_anywhere_date?: Date;
}
