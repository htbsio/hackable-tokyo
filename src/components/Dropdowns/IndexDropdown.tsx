import React, { LegacyRef } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { TFunction } from "next-i18next";
import { withTranslation, i18n } from "@i18n";

const IndexDropdownComponent: React.FC<{ t: TFunction }> = ({ t }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current as Element, popoverDropdownRef.current as HTMLElement, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="#pablo"
                ref={btnDropdownRef as LegacyRef<HTMLAnchorElement>}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                }}
            >
                {t("menu")}
            </a>
            <div
                ref={popoverDropdownRef as LegacyRef<HTMLDivElement>}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                    }
                >
                    Admin Layout
                </span>
                <Link
                    to="/admin/dashboard"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Dashboard
                </Link>
                <Link
                    to="/admin/settings"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Settings
                </Link>
                <Link
                    to="/admin/tables"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Tables
                </Link>
                <Link
                    to="/admin/maps"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Maps
                </Link>
                <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                    }
                >
                    Auth Layout
                </span>
                <Link
                    to="/auth/login"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Login
                </Link>
                <Link
                    to="/auth/register"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Register
                </Link>
                <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                    }
                >
                    No Layout
                </span>
                <Link
                    to="/landing"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Lading
                </Link>
                <Link
                    to="/profile"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Profile
                </Link>
            </div>
        </>
    );
};

const IndexDropdown = withTranslation(["common", "home"])(
    IndexDropdownComponent,
);

export default IndexDropdown;
