import '../App.css';

function Home() {
    return (
        <div className="border-1 border-amber-900 rounded-lg bg-blue-200 hover:bg-blue-400 transition duration-1000 mx-12 mb-10">
            <h2 className="text-4xl font-bold text-red-500 mt-3 mb-3 pl-8 pt-8">Welcome to Tailwind CSS Practice</h2>
            <p className="px-8 pb-8 pt-2">Some of these come into one's life naturally, like parents, family members,
                and the people in one's general vicinity. Unfortunately, many people are somewhat lacking
                in this category and never seem to have a grasp on where they could go or what they could be.
                It's not that they lack potential, it's that they lack a vision of what is even possible.
                They are so trapped in by the frankly sad and limited world they know that they never even
                dream there could be&mdash;and is&mdash;something better out there. That is precisely the purpose of
                ICONS: to inspire people, open minds, and help humanity realize its potential.
            </p>
            <iframe class="aspect-video mx-auto mb-12 w-150" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
        </div>
    );
}

export default Home;