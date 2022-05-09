import styled from "styled-components";

import NavigationWrapper from "./NavigationWrapper";
import NavigationItem from "./NavigationItem";

import AgentIcon from '../../public/navigations-icons/agent-icon.webp'
import AsFoundationIcon from '../../public/navigations-icons/AS-FOUNDATION-icon.webp'
import CareerIcon from '../../public/navigations-icons/career-icon.webp'
import CastleIcon from '../../public/navigations-icons/castle-icon.webp'
import ComicsIcon from '../../public/navigations-icons/comics-icon.webp'
import CommunityIcon from '../../public/navigations-icons/community-icon.webp'
import FaqIcon from '../../public/navigations-icons/FAQ-icon.webp'
import MintIcon from '../../public/navigations-icons/mint-icon.webp'
import NewsIcon from '../../public/navigations-icons/news-icon.webp'
import RoadMapIcon from '../../public/navigations-icons/roadmap-icon.webp'
import TeamIcon from '../../public/navigations-icons/team-icon.webp'
import TheAgencyIcon from '../../public/navigations-icons/the-agency-icon.webp'

const NavigationIndex = styled.div`
    top:90px;
    left:0;
    z-index:9999;
    opacity:0;
    animation-timing-function: ease-in-out;
    visibility:hidden;
    overflow:auto;
    height:80vh;

    @media (min-width:786px) {
        bottom:-230px;
        height:auto;
    }

    > * {
        width:100%;
        margin:0 auto;
        max-width:80vw;
        
        @media (min-width:786px) {
            max-width:300px;
            margin:inherit;
        }

        box-shadow: 0px 4px 11px 0px rgb(50 50 50 / 60%);
    }
`

const Navigation = ({ className }) => {
    return (
        <NavigationIndex className={`navigation-index d-md-flex justify-content-center position-absolute w-100 ${className ? className : ''}`}>
            <NavigationWrapper title='Anti-Stigma'>
                <NavigationItem
                    icon={CastleIcon}
                    link='/home'
                    name='Castle'
                />
                <NavigationItem
                    icon={AgentIcon}
                    link='/agents'
                    name='Anti-Stigmas'
                />
                <NavigationItem
                    icon={RoadMapIcon}
                    link='/roadmap'
                    name='Roadmap'
                />
                <NavigationItem
                    icon={ComicsIcon}
                    link='/comics'
                    name='Comics'
                />
            </NavigationWrapper>

            <NavigationWrapper title='The Sociery'>
                <NavigationItem
                    icon={CommunityIcon}
                    // link='#'
                    name='Community'
                />
                <NavigationItem
                    icon={TheAgencyIcon}
                    // link='#'
                    name='The Society'
                />
                <NavigationItem
                    icon={AsFoundationIcon}
                    // link='#'
                    name='As Foundation'
                />
                <NavigationItem
                    icon={TeamIcon}
                    // link='#'
                    name='Team'
                />
            </NavigationWrapper>

            <NavigationWrapper title='And more...'>
                <NavigationItem
                    icon={MintIcon}
                    link='/mint'
                    name='Mint'
                />
                <NavigationItem
                    icon={NewsIcon}
                    // link='#'
                    name='News'
                />
                <NavigationItem
                    icon={CareerIcon}
                    // link='#'
                    name='Career'
                />
                <NavigationItem
                    icon={FaqIcon}
                    // link='#'
                    name='FAQ'
                />
            </NavigationWrapper>
        </NavigationIndex>
    );
};

export default Navigation;
