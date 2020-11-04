/**
 *@auther: tang
 *@Date: 2020-11-02
 *Project: netbaseMusic
 */
import Count1 from "./Count1";
import Count2 from "./Count2";
import MusicStore from "./MusicStore";

let CountOne = new Count1();
let CountTwo = new Count2();
let musicStore = new MusicStore()
const store = {
    CountOne,CountTwo,musicStore
}

export default store
