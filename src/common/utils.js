import { colors } from "./colors";

class UtilService {

    static acceptColor(item) {

        let color = colors.RED;

        if (item && item.photogroup && item.photogroup.length > 0) { color = colors.RED}
        if (item && item.website && item.website.title) { color = colors.GREY8}
        if (item && item.notice) { color = colors.GREEN}
        if (item && item.photo) { color = colors.BLACK}

        return color;
    }

}

export default UtilService
