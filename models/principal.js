 const Staff = require('./staff');

 class Principal extends Staff{
     constructor( first_name,
        last_name,
        phone_number,
        address,
        personal_email,
        base_salary,
        bank_IBAN,
        bank_name,
        bank_branch)
        {
            const role = "principal";
            super( first_name,
                last_name,
                phone_number,
                address,
                personal_email,
                role,
                base_salary,
                bank_IBAN,
                bank_name,
                bank_branch);
     }
 }

 module.exports = Principal;