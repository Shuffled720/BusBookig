import { useRouter, useSearchParams } from 'next/navigation';

const Page = async () => {
    const routers = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const apiRedirect = await fetch('/api/whatever')

    const data=await apiRedirect.json();
    
}

export default Page;