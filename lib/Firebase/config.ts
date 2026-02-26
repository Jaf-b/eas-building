// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
    apiKey: process.env.NEXT_API_SECRET,
    authDomain: process.env.NEXT_PUBLIC_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SEND_ID,
    appId: process.env.NEXT_PUBLIC_API_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

/*
{items.map((item) => (
    <SidebarMenuItem key={item.title}>
    <SidebarMenuButton asChild>
    <a href={item.url}>
        <item.icon />
        <span>{item.title}</span>
        </a>
        </SidebarMenuButton>
        </SidebarMenuItem>
))}

 */