import { pathNames } from "@/lib/pathNames"
import { ChartPie, List, UserRound, Wallet } from "lucide-react"

const menu = [
   {
      id: 1,
      label: 'Tổng quan',
      path: pathNames.users.layout + pathNames.users.general,
      icon: <ChartPie size={14} />,
      hasSubs: false,
   },
   {
      id: 2,
      label: 'Cá nhân',
      path: pathNames.users.layout + pathNames.users.personal,
      icon: <UserRound size={14} />,
      hasSubs: true,
      subs: [
         {
            id: 21,
            label: 'Thông tin cá nhân',
            path: pathNames.users.layout + pathNames.users.personal,
         },
         {
            id: 22,
            label: 'Cập nhật số điện thoại',
            path: pathNames.users.layout + pathNames.users.updatePhone,
         },
         {
            id: 23,
            label: 'Cập nhật email',
            path: pathNames.users.layout + pathNames.users.updateEmail,
         },
      ]
   },
   {
      id: 3,
      label: 'Quản lý tin đăng',
      path: pathNames.users.layout + pathNames.users.managePost,
      icon: <List size={14} />,
      hasSubs: true,
      subs: [
         {
            id: 31,
            label: 'Tạo mới tin đăng',
            path: pathNames.users.layout + pathNames.users.createPost,
         },
         {
            id: 32,
            label: 'Danh sách tin đăng',
            path: pathNames.users.layout + pathNames.users.managePost,
         },
         {
            id: 33,
            label: 'Danh sách tin nháp',
            path: pathNames.users.layout + pathNames.users.manageDraft,
         },
      ]
   },
   {
      id: 4,
      label: 'Quản lý tài chính',
      path: pathNames.users.layout + pathNames.users.manageBalance,
      icon: <Wallet size={14} />,
      hasSubs: true,
      subs: [
         {
            id: 41,
            label: 'Thông tin số dư',
            path: pathNames.users.layout + pathNames.users.manageBalance,
         },
         {
            id: 42,
            label: 'Lịch sử thanh toán',
            path: pathNames.users.layout + pathNames.users.paymentHistory,
         },
         {
            id: 43,
            label: 'Nạp tiền',
            path: pathNames.users.layout + pathNames.users.deposit,
         },
      ]
   }
]

export default menu