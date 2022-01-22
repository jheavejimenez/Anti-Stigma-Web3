import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

const MenuItem = styled.li`
    display:block;
    list-style:none;
    margin:0 10px;

    a {
        color:#000;

        &:hover, 
        &:focus {
            color:#7e4eaf;
        }
    }

    .menu-item__icon-wrap {
        width:35px;
        height:35px;
    }
`;

const NavigationItem = ({ icon, link, name, }) => (
    <MenuItem>
        <Link href={link}>
            <a className='d-flex align-items-center py-1'>
                {icon &&
                    <div className='menu-item__icon-wrap position-relative '>
                        <Image className='pe-2'
                            src={icon}
                            layout='fill'
                            objectFit="contain"
                        />
                    </div>
                }
                {name}
            </a>
        </Link>
    </MenuItem>
);

export default NavigationItem;
