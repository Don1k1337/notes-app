import {handleChange} from "./formUtils";
import React from "react";

test('Handle change event testing', () => {
    const setState = jest.fn()
    const handleChangeFn = handleChange(setState)

    handleChangeFn({
        target: {
            value: 'test'
        },
    } as React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>);
});