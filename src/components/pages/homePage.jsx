export default function HomePage() {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page component. You can add more content here!</p>
            <button>Explore</button>

            <Link to="/login">Login</Link>
        </div>
    );
}
