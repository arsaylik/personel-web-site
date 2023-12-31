export default function Nav(){
    return(
        <>
            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

                    <a href="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</a>

                    <a href="/Works" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Works</a>

                    <a href="Blog" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blog</a>

                    <a href="Contact" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>
                </div>
            </nav>
        </>
    )

}
