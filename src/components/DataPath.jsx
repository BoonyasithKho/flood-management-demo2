import MapIcon from '@mui/icons-material/Map';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DownloadIcon from '@mui/icons-material/Download';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import Mapping from '../screens/Mapping';
import Dashboard from '../screens/Dashboard';
import Download from '../screens/Download';
import Profile from '../screens/Profile';
import DeviceRegisted from '../screens/DeviceRegister/DeviceRegisted'
import Contactus from '../screens/Contactus'
import ErrorScreen from '../screens/ErrorScreen';

// eslint-disable-next-line react-refresh/only-export-components
export default function () {
    const data = [
        {
            id: 0,
            label: "แผนที่",
            icon: <MapIcon />,
            component: <Mapping />,
            path: "/"
        },
        {
            id: 1,
            label: "Dashboard",
            icon: <DashboardIcon />,
            component: <Dashboard />,
            path: "/dashboard"
        },
        {
            id: 2,
            label: "ดาวน์โหลด",
            icon: <DownloadIcon />,
            component: <Download />,
            path: "/download"
        },
        {
            id: 3,
            label: "โปรไฟล์",
            icon: <AccountCircleIcon />,
            component: <Profile />,
            path: "/profile"
        },
        {
            id: 4,
            label: "ประวัติการลงทะเบียนเครื่องจักร",
            icon: <BookmarkAddedIcon />,
            component: <DeviceRegisted />,
            path: "/deviceregisted"
        },
        {
            id: 5,
            label: "ติดต่อเจ้าหน้าที่",
            icon: <PermPhoneMsgIcon />,
            component: <Contactus />,
            path: "/contactus"
        },
        {
            id: 6,
            label: "ออกจากระบบ",
            icon: <ExitToAppIcon />,
            component: <ErrorScreen />,
            path: "/errorscreen"
        },
    ]
    return data
}