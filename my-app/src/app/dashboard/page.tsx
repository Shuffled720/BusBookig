import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    // console.log("hello from server");


    return (
        <div>
        
        </div>
    )
}
export default Page;
