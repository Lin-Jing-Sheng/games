import store from "@/store"

export default function buttonPrvgs(funcCode) {
  let prvgs = store.state.user.userInfo.prvgs
  return true
  // return prvgs.includes(funcCode)
}

