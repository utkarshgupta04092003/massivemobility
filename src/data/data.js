import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GroupsIcon from '@mui/icons-material/Groups';
import BentoIcon from '@mui/icons-material/Bento';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpIcon from '@mui/icons-material/Help';


export const sidebarData = [
    {
        text: "Portfolio",
        icon: <ElectricBoltIcon/>
    },
    {
        text: "Invest",
        icon: <CurrencyRupeeSharpIcon/>,
        childern: {
            text: 'Starred',
            icon: <StarBorderIcon/>
        }
    },
    {
        text: "Syndicates",
        icon: <GroupsIcon/>
    },
    {
        text: 'Ledger',
        icon: <BentoIcon/>
    },
    {
        text: 'Message',
        icon: <MessageIcon/>
    },
    {
        text: 'Events',
        icon: <CalendarMonthIcon/>
    },
    {
        text: 'News & Blogs',
        icon: <DescriptionIcon/>
    },
    {
        text: 'Help & Support',
        icon: <HelpIcon/>
    }
]
