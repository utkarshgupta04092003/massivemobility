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

export const feedData = [
    {
        _id: 1,
        newUpdate: 'Investor Update',
        isLiveDeal: false,
        companyLogoUrl: '/company_logo.png',
        companyName: 'Ace Green Recycling',
        field: 'Battery Recycling',
        location: 'Bengaluru',
        postText: 'Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in.',
        readMore: true,
        isPostImage: true,
        postImageUrl: '/post_1.jpg',
        viewDeal: false,
        postEndText: 'Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.',
        date: '4 days ago'

    },
    {
        _id: 2,
        newUpdate: 'Feature launch',
        isLiveDeal: false,
        companyLogoUrl: '/company_logo.png',
        companyName: 'Ace Green Recycling',
        field: 'Battery Recycling',
        location: 'Bengaluru',
        postText: 'Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. Lacus tincidunt dignissim risus quam diam vivamus proin volutpat.Massa ut et sed mattis tristique. Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.',
        readMore: true,
        isPostImage: false,
        postImageUrl: '',
        viewDeal: false,
        postEndText: '',
        date: '15-03-2024'

    },
    {
        _id: 3,
        newUpdate: 'Fund Investment Update',
        isLiveDeal: true,
        companyLogoUrl: '/company_logo.png',
        companyName: 'Ace Green Recycling',
        field: 'Battery Recycling',
        location: 'Bengaluru',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus, aliquid soluta mollitia blanditiis reprehenderit repellat doloremque molestias aut reiciendis esse dolor voluptate accusamus repudiandae. ',
        readMore: false,
        isPostImage: true,
        postImageUrl: '/post_3.jpg',
        viewDeal: true,
        postEndText: '',
        date: '15-03-2024'

    }
]