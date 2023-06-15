import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import AddButton from "../../components/AddButton";
import PizzaList from "../../components/PizzaList";
import Image from "next/image";
const Menu = ({ pizzaList, admin }) => {
    return (
        <div>
            <PizzaList pizzaList={pizzaList} />
        </div>

    )
}

export default Menu;


export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }

    const res = await axios.get("http://localhost:3000/api/products");
    return {
        props: {
            pizzaList: res.data,
            admin,
        },
    };
};