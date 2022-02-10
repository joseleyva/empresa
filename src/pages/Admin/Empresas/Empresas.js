import React, { useState, useEffect } from 'react';
import { getCompanyApi } from '../../../api/company';
import ListEmpresas from '../../../components/Admin/Empresas/ListEmpresas';

export default function Empresas() {
  const [reloadCompany, setRealoadCompany] = useState(false);
  const [companies, setCompanies]= useState([]);

  useEffect(() => {
    getCompanyApi().then(response => {
      setCompanies(response.company);
    })
    setRealoadCompany(false);
  }, [reloadCompany]);

  return (
    <div>
      <ListEmpresas companies={companies} setRealoadCompany={setRealoadCompany}/>
    </div>
  );
}
