import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <div className="text-center" data-testid="container">
            <Logo />
        </div>
    );
};
