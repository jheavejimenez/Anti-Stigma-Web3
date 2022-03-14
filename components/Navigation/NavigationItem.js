import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

const MenuItem = styled.li`
    display:block;
    list-style:none;
    margin:0 10px;

    a {
        color:var(--black);

        &:hover, 
        &:focus {
            color:var(--purple);
        }
    }

    .no-link {
        opacity:0.5;

        &:hover, 
        &:focus {
            color:var(--black);
        }
    }

    .menu-item__icon-wrap {
        width:35px;
        height:35px;
    }
`;

const NavigationItem = ({ icon, link, name, target, }) => (
    <MenuItem>
        {link ?
            <Link href={link}>
                <a 
                    className='d-flex align-items-center py-1'
                    target={target ? '_blank' : '_self'}
                >
                    {icon &&
                        <div className='menu-item__icon-wrap position-relative'>
                            <Image className='pe-2'
                                alt='icon'
                                src={icon}
                                layout='fill'
                                objectFit="contain"
                            />
                        </div>
                    }
                    {name}
                </a>
            </Link>
            :
            <a className='d-flex align-items-center py-1 text-decoration-line-through no-link'>
                {icon &&
                    <div className='menu-item__icon-wrap position-relative'>
                        <Image className='pe-2'
                            alt='icon'
                            src={icon}
                            layout='fill'
                            objectFit="contain"
                        />
                    </div>
                }
                {name}
            </a>
        }
    </MenuItem>
);

export default NavigationItem;
