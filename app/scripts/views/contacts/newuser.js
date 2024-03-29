define([
    'modo'
], function(modo) {

    var ui = modo.generate([{
        type: 'FormContainer',
        ref: 'root',
        params: {
            defaultData: {
                name: 'na',
                address: 'na',
                mail: 'na'
            }
        },
        children: [
            /* Im Formcontainer legt man entweder Elemente die get/set enabled sind direkt rein,
             * oder kapselt sie in FormSlot elemente. Form Slots haben jeweils ein Label und 
             * nen Sub-Container in dem man wiederum mehrere sub-inputs reinpacken könnte.
             * ================================================================================
             */
            
            {
                type: 'FormSlot',
                params: {
                    label: 'Username (first/last):'
                },
                children: [        
                    {
                        type: 'InputText',
                        key: 'firstname',
                        params: {placeholder: 'firstname'} 
                    },                    
                    {
                        type: 'InputText',
                        key: 'name',
                        params: {placeholder: 'lastname' }
                    },
                    { 
                        type: 'DropDown',
                        key: 'salutation',
                        params: {
                            data: {
                                0: 'Herr',
                                1: 'Frau'    
                            }
                        }
                    }                                         
                ]
            },
            {
                type: 'FormSlot',
                params: {
                    label: 'Address:'
                },
                children: [
                    {
                        type: 'InputText',
                        key: 'address'
                    }
                ]
            },
            {
                type: 'FormSlot',
                params: {
                    label: 'E-Mail:'
                },
                children: [
                    {
                        type: 'InputText',
                        key: 'mail'
                    }
                ]
            },
            {
                type: 'Button',
                params: {
                    label: 'Create new User'
                },
                on: {
                    click: function(){                            
                        ui.collection.add(ui.root.get());
                        ui.root.set();
                    }
                }
            }            
        ]
    }]);    

    return ui;
});