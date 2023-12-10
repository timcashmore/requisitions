using CapabilityService as service from '../../srv/capabilities_srv';


annotate service.BusinessCapabilities with @(
    UI.PresentationVariant : {
    GroupBy : [
        businessarea
    ],
    Text : 'Default',
    SortOrder : [
        {
            $Type : 'Common.SortOrderType',
            Property : capabilityid,
            Descending : false
        }
    ],
    Visualizations : [
        '@UI.LineItem',
    ]
    });

annotate service.BusinessCapabilities with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : businessarea,
            Label : 'Business Area',
        },{
            $Type : 'UI.DataField',
            Value : capability,
            Label : 'Capability',
        },{
            $Type : 'UI.DataField',
            Value : capabilityid,
            Label : 'Capability ID',
        },
        {
            $Type : 'UI.DataField',
            Value : inscope,
            Label : 'In-Scope',
        },{
            $Type : 'UI.DataField',
            Value : sapbusinessarea,
            Label : 'SAP Detail Business Area',
        },
        {
            $Type : 'UI.DataField',
            Value : sapcapability,
            Label : 'SAP Detail Capability',
        },
        {
            $Type : 'UI.DataField',
            Value : sapproductname,
            Label : 'SAP Product Name',
        },
        {
            $Type : 'UI.DataField',
            Value : s4core,
            Label : 'S4HANA Core',
        },
        {
            $Type : 'UI.DataField',
            Value : customer,
            Label : 'customer',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : deployment,
            Label : 'Deployment Platform',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : notes,
            Label : 'Notes',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : sapbusinessareaid,
            Label : 'sapbusinessareaid',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : sapcapabilitydetails,
            Label : 'sapcapabilitydetails',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : sapcapabilityid,
            Label : 'sapcapabilityid',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : saplob,
            Label : 'SAP LoB',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : sapproductdetails,
            Label : 'SAP Product Details',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : sapproductmetric,
            Label : 'SAP Product Metric',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : sapproductmetricdetails,
            Label : 'SAP Product Metric Details',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : saprecommended,
            Label : 'SAP Recommended Solution',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : sapsku,
            Label : 'SAP Product Number',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : urllink,
            Label : 'urllink',
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : urlname,
            Label : 'urlname',
            ![@UI.Hidden],
        },]
);
annotate service.BusinessCapabilities with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Business Area',
                Value : businessarea,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Capability',
                Value : capability,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Capability ID',
                Value : capabilityid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP LoB',
                Value : saplob,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP Business Area',
                Value : sapbusinessarea,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP Detail Capability',
                Value : sapcapability,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP Detail Capability Description',
                Value : sapcapabilitydetails,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP Recommended Solution',
                Value : saprecommended,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Capability Details',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'SAP Solution Details',
            ID : 'SAPSolutionDetails1',
            Target : '@UI.FieldGroup#SAPSolutionDetails',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Notes',
            ID : 'Notes',
            Target : '@UI.FieldGroup#Notes1',
        },
    ]
);
annotate service.BusinessCapabilities with @(
    UI.FieldGroup #Solution : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : sapproductdetails,
                Label : 'sapproductdetails',
            },{
                $Type : 'UI.DataField',
                Value : sapproductmetric,
                Label : 'sapproductmetric',
            },{
                $Type : 'UI.DataField',
                Value : sapproductmetricdetails,
                Label : 'sapproductmetricdetails',
            },{
                $Type : 'UI.DataField',
                Value : sapproductname,
                Label : 'sapproductname',
            },{
                $Type : 'UI.DataField',
                Value : sapsku,
                Label : 'sapsku',
            },{
                $Type : 'UI.DataField',
                Value : urllink,
                Label : 'urllink',
            },{
                $Type : 'UI.DataField',
                Value : urlname,
                Label : 'urlname',
            },],
    }
);
annotate service.BusinessCapabilities with @(
    UI.FieldGroup #Notes : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : notes,
                Label : 'notes',
            },],
    }
);
annotate service.BusinessCapabilities with @(
    UI.FieldGroup #SAPSolutionDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : sapsku,
                Label : 'SAP Product Number',
            },
            {
                $Type : 'UI.DataField',
                Value : sapproductname,
                Label : 'SAP Product Name',
            },
            {
                $Type : 'UI.DataField',
                Value : s4core,
                Label : 'S4HANA Core',
            },
            {
                $Type : 'UI.DataField',
                Value : sapproductdetails,
                Label : 'SAP Product Description',
            },
            {
                $Type : 'UI.DataField',
                Value : deployment,
                Label : 'Deployment Platform',
            },
            {
                $Type : 'UI.DataField',
                Value : sapproductmetric,
                Label : 'SAP Product Metric',
            },
            {
                $Type : 'UI.DataField',
                Value : sapproductmetricdetails,
                Label : 'SAP Product Metric Description',
            },
            {
                $Type : 'UI.DataFieldWithUrl',
                Url :   urllink,
                Value : urlname,
                Label : 'Link to Additional Information',
            }],
    }
);
annotate service.BusinessCapabilities with @(
    UI.FieldGroup #Notes1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : notes,
                Label : 'Notes',
            },],
    }
);
annotate service.BusinessCapabilities with @(
    UI.HeaderInfo : {
        TypeName : 'capabilityid',
        TypeNamePlural : '',
        Title : {
            $Type : 'UI.DataField',
            Value : capability,
        },
        Description : {
            $Type : 'UI.DataField',
            Value : sapcapability,
        },
    }
);
annotate service.BusinessCapabilities with @(
    UI.SelectionFields : [
        businessarea,
        inscope,
    ]
);
annotate service.BusinessCapabilities with {
    businessarea @Common.Label : 'Business Area'
};
annotate service.BusinessCapabilities with {
    inscope @Common.Label : 'In-Scope'
};
annotate service.BusinessCapabilities with {
    businessarea @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'BusinessAreas',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : businessarea,
                    ValueListProperty : 'businessarea',
                },
            ],
            Label : 'Business Areas',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.BusinessCapabilities with {
    inscope @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Scope',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : inscope,
                    ValueListProperty : 'scope',
                },
            ],
            Label : 'In Scope ?',
            PresentationVariantQualifier : 'vh_BusinessCapabilities_inscope',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Scope with @(
    UI.PresentationVariant #vh_BusinessCapabilities_inscope : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : scope,
                Descending : false,
            },
        ],
    }
);
annotate service.BusinessCapabilities with {
    sapbusinessareaid @Common.Label : 'SAP Business Area'
};
annotate service.BusinessCapabilities with {
    sapbusinessareaid @Common.Text : {
            $value : sapbusinessarea,
            ![@UI.TextArrangement] : #TextOnly,
        }
};
