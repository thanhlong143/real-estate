import { postSoldTypes } from "@/lib/constants"
import { pathNames } from "@/lib/pathNames"

const navigation = [
   {
      id: 1,
      name: "Nhà đất bán",
      pathname: pathNames.public.soldProperty,
      hasSub: true,
      subs: postSoldTypes
   },
   {
      id: 2,
      name: "Nhà đất cho thuê",
      pathname: pathNames.public.rentProperty,
      hasSub: true,
      subs: postSoldTypes
   },
   {
      id: 3,
      name: "Tin tức",
      pathname: pathNames.public.news,
      hasSub: false
   },
]

export default navigation