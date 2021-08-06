import react,{ Component } from 'react';
import styled from 'styled-components'
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import Options from "./Options";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
//import SvgIcon from '@material-ui/core/SvgIcon';
//import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > svg': {
//         margin: theme.spacing(2),
//       },
//     },
// }));


class Sidebar extends Component {
    //const classes = useStyles();
    render(){
        return(
            <Bar>
                <SidebarButton>
                    <Button>
                        {<AddIcon fontSize="large" />}
                        Compose
                    </Button>
                </SidebarButton>
                    <Options
                        Icon={InboxIcon}
                        title="Inbox"
                        number={100}
                        selected={true}
                    />
                    <Options Icon={StarIcon} title="Starred" number={100} />
                    <Options Icon={AccessTimeIcon} title="Snoozed" number={100} />
                    <Options Icon={LabelImportantIcon} title="Important" number={100} />
                    <Options Icon={NearMeIcon} title="Sent" number={100} />
                    <Options Icon={NoteIcon} title="Drafts" number={100} />
                    <Options Icon={ExpandMoreIcon} title="More" number={100} />
                    <Footer>
                        <IconButton>
                            <PersonIcon/>
                        </IconButton>
                        <IconButton>
                            <DuoIcon/>
                        </IconButton>
                        <IconButton>
                            <PhoneIcon/>
                        </IconButton>
                    </Footer>
            </Bar>
    
        )
    }

}
//background: #BFFF00;
const Bar = styled.main`
    flex: 0.3;
    max-width: 300px;
    padding-right: 20px;
`;
const SidebarButton = styled.div`
  margin-top: 15px !important;
  margin-left: 10px !important;
  margin-bottom: 15px !important;
  text-transform: capitalize !important;
  color: gray;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
`;


export default Sidebar;