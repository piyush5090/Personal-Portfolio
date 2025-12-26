export default function Footer() {
  return (
    <footer className="text-lg text-center relative isolate px-6 py-24 lg:px-8">
      <div className="flex items-center justify-center gap-x-4">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/piyush-govindani/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-square"
        >
          <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761
            2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11
            19h-3v-10h3v10zm-1.5-11.268c-.966
            0-1.75-.79-1.75-1.764s.784-1.764
            1.75-1.764 1.75.79 1.75 1.764-.784
            1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.115-4
            0v5.604h-3v-10h3v1.765c1.396-2.586 7-2.777
            7 2.476v5.759z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/piyushg5090"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-square"
        >
          <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12
            12 0 5.303 3.438 9.8 8.205
            11.385.6.113.82-.258.82-.577
            0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729
            1.205.084 1.84 1.237 1.84
            1.237 1.07 1.835 2.809 1.305
            3.495.998.108-.776.418-1.305.762-1.604-2.665-.304-5.466-1.334-5.466-5.93
            0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.524.105-3.176
            0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138
            3.003.404 2.28-1.552 3.285-1.23
            3.285-1.23.645 1.653.24 2.874.12
            3.176.765.84 1.23 1.91 1.23
            3.22 0 4.61-2.805 5.625-5.475
            5.92.43.37.81 1.096.81 2.216
            0 1.6-.015 2.884-.015 3.28
            0 .315.21.69.825.57C20.565
            22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:govindanipiyush10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-square"
        >
          <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 13.065L.015 6h23.97L12 13.065zM12
            15.375L.015 8.31V18h23.97V8.31L12 15.375z" />
          </svg>
        </a>

      </div>

      <p className="mt-4">
        Created with ❤️ by <span className="font-bold">Piyush Govindani</span>
      </p>
      <p className="opacity-60 mt-1">
        © {new Date().getFullYear()} — Built with React + TailwindCSS
      </p>
    </footer>
  );
}
