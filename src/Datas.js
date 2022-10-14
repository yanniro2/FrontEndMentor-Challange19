export default [
    {
        id: 1,
        name: "name",
        placeholder: "e.g. Jane Applessed",
        required: true,
        pattern: "^[A-Za-z ]+$",
        label: "cardholder name",
        errorMessage: "wrong format, letters only",
        type: "text",

    },
    {
        id: 2,
        name: "number",
        placeholder: "e.g. 1234 5678 9123 0000",
        required: true,
        pattern: "[0-9]{16}$",
        label: "card number",
        errorMessage: "wrong format, numbers only",
        type: "text",

    },
    {
        id: 3,
        date: {
            label: "exp.date(mm/yy)",
            varient: {
                Month: {
                    placeholder: "MM",
                    pattern: "^(0?[1-9]|1[012])$",
                    errorMessage: "Can't be blank",
                    name: "month",
                    required: true,
                    type: "text",
                },
                Year: {
                    placeholder: "YY",
                    pattern: "^(0?[1-9]|2[0-9])$",
                    errorMessage: "Can't be blank",
                    name: "year",
                    required: true,
                    type: "text",
                }
            },

        },
        cvc: {
            label: "cvc",
            errorMessage: "Can't be blank",
            name: "cvc",
            placeholder: "e.g. 123",
            required: true,
            type: "text",
            pattern: "[0-9]{3}$"

        }

    }

]
