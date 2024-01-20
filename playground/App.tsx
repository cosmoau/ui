/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useState } from "react";

import * as C from "../src/index";

export function App(): ReactElement {
    const [file, setFile] = useState<File | null>(null);

    return (
    <C.Provider>
        <C.View bottom="larger" container top="larger">
            <C.Stack direction="row">
                <C.Stack direction="column" offset={30} width={40}>
                        <C.Stack bottom="medium">
                            <C.Field copy />
                        </C.Stack>
                    <C.Stack bottom="medium">
                        <C.Input copy />
                    </C.Stack>

                    <img src={file ? URL.createObjectURL(file) : ""} />
                <C.Upload
                    accept="image/*"
error
success
        
                    onUpload={(file) => {
                        setFile(file);
                    }
                    }
                />
                </C.Stack>
            </C.Stack>
            </C.View>
            </C.Provider>
    )
}
