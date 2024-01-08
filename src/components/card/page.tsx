"use client"

import { employee } from "@/constants/list"
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Card = ({ data }: { data: employee }) => {
    return (
        <div className={`parent_container ${[...data.children].length === 0 ? 'no_children' : ''}`}>
            <div className={`employee_card_con  ${[...data.children].length === 1 ? 'one_children' : ''}`}>
                <div className="employee_card">
                    <ExpandMoreOutlinedIcon className="expand" />
                    <div className="before_ele"></div>
                    <div className="employee_card_top_con">
                        <button onClick={() => alert("This feature is under construction")}>
                            <ModeEditOutlineOutlinedIcon className="edit_svg" />
                        </button>
                        <AccountCircleSharpIcon className="person_svg" />
                        <p className="employee_name">{data.name}</p>
                    </div>
                    <div>
                        <div className="role">
                            <span>Role</span> <p>{data.designation}</p>
                        </div>
                        <div className="role">
                            <span>Email</span> <p>{data.email}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='children_container'>
                {data?.children && [...data?.children].map(each => <Card data={each} key={each.email} />)}
            </div >
        </div >
    )
}

export default Card