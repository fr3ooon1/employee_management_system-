// Copyright (c) 2024, Muhammad Essam and contributors
// For license information, please see license.txt

frappe.ui.form.on("Employee", {
	refresh(frm) {
        frm.events.validate_fields(frm);
	},
    validate_fields(frm){
        frm.set_query('department', () => {
            return {
                filters: {
                    company: frm.doc.company
                }
            }
        })
    },
});
