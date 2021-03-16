import { fsSize } from "systeminformation";

export async function get() {
    const data = await fsSize()
    return { body: data }
}
