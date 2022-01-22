import styled from "styled-components";

import NavigationWrapper from "./NavigationWrapper";
import NavigationItem from "./NavigationItem";

import AgentIcon from '../../public/navigations-icons/agent-icon.png'
import AsFoundationIcon from '../../public/navigations-icons/AS-FOUNDATION-icon.png'
import CareerIcon from '../../public/navigations-icons/career-icon.png'
import CastleIcon from '../../public/navigations-icons/castle-icon.png'
import ComicsIcon from '../../public/navigations-icons/comics-icon.png'
import CommunityIcon from '../../public/navigations-icons/community-icon.png'
import FaqIcon from '../../public/navigations-icons/FAQ-icon.png'
import MintIcon from '../../public/navigations-icons/mint-icon.png'
import NewsIcon from '../../public/navigations-icons/news-icon.png'
import RoadMapIcon from '../../public/navigations-icons/roadmap-icon.png'
import TeamIcon from '../../public/navigations-icons/team-icon.png'
import TheAgencyIcon from '../../public/navigations-icons/the-agency-icon.png'

const NavigationIndex = styled.div`
    bottom:-210px;
    z-index:9999;
    opacity:0;
    animation-timing-function: ease-in-out;

    visibility:hidden;

    > * {
        width:100%;
        max-width:300px;

        box-shadow: 0px 4px 11px 0px rgb(50 50 50 / 60%);
    }
`

const Navigation = ({ className }) => {
    return (
        <NavigationIndex className={`d-flex justify-content-center position-absolute w-100 ${className ? className : ''}`}>
                <NavigationWrapper title='Anti-Stigma'>
                    <NavigationItem
                        // icon={CastleIcon}
                        link='#'
                        name='Castle'
                    />
                    <NavigationItem
                        // icon={AgentIcon}
                        link='#'
                        name='Agents'
                    />
                    <NavigationItem
                        // icon={RoadMapIcon}
                        link='#'
                        name='Roadmap'
                    />
                    <NavigationItem
                        // icon={ComicsIcon}
                        link='#'
                        name='Comics'
                    />
                </NavigationWrapper>

                <NavigationWrapper title='The Sociery'>
                    <NavigationItem
                        // icon={CommunityIcon}
                        link='#'
                        name='Community'
                    />
                    <NavigationItem
                        // icon={TheAgencyIcon}
                        link='#'
                        name='The A-Gen-Z'
                    />
                    <NavigationItem
                        // icon={AsFoundationIcon}
                        link='#'
                        name='As Foundation'
                    />
                    <NavigationItem
                        // icon={TeamIcon}
                        link='#'
                        name='Team'
                    />
                </NavigationWrapper>

                <NavigationWrapper title='And more...'>
                    <NavigationItem
                        // icon={MintIcon}
                        link='#'
                        name='Mint'
                    />
                    <NavigationItem
                        // icon={NewsIcon}
                        link='#'
                        name='News'
                    />
                    <NavigationItem
                        // icon={CareerIcon}
                        link='#'
                        name='Career'
                    />
                    <NavigationItem
                        // icon={FaqIcon}
                        link='#'
                        name='FAQ'
                    />
                </NavigationWrapper>
        </NavigationIndex>
    );
};

export default Navigation;
