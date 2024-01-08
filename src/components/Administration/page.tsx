"use client"
import React from 'react'
import listJson from '../../constants/administrationList.json'
import { employee } from "@/constants/list"
import Card from "../card/page"
import {reArrangeAdministrationData} from '@/constants/list'

const Administration = () => {
    //@ts-ignore
    const list = reArrangeAdministrationData(listJson)
    return (
        <>
            {list.map((each: employee) => <Card data={each} key={each.email} />)}
        </>
    )
}

export default Administration