import { useState } from "react";

function Register() {
    const [form, setForm] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirm: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        email: "",
        password: ""
    })

    const validate = () => {
        const e = {};
        if (form.fullname.trim().length < 2){
            e.fullname = "Please enter your full name.";
        }
        if(form.username.trim().length <= 3 || form.username.trim().length > 16){
            e.username = "Username should be in between 3-16 characters";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
            e.email = "Enter a valid email address.";
        }
        if (form.password.length < 8 || form.password.length > 16){
            e.password = "Password must be at least 8 characters.";
        }
        if (form.password !== form.confirm){
            e.confirm = "Passwords don't match.";
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validate()){
            setSubmitted(true);
        }

        inputs.fullname = form.fullname
        inputs.username = form.username
        inputs.email = form.email
        inputs.password = form.password
    };
    
    return (
        <div className="h-screen overflow-hidden bg-[#fcfbf8] text-[#0f1b3d]">
            {/* Main */}
            <main className="mx-auto grid h-full max-w-7xl gap-6 px-6 py-4 lg:grid-cols-2 lg:gap-10 lg:py-6">
                {/* Left promo */}
                <section className="flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c55e]">
                        Join Us
                    </span>
                    <h1 className="mt-2 font-serif text-3xl font-bold leading-[1.05] tracking-tight lg:text-5xl">
                        Stories that <br />
                        bend the light.
                    </h1>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#0f1b3d]/70 lg:text-base">
                        Create your free account to follow curated writing across art,
                        science, technology, cinema, design, and food — all in one place.
                    </p>

                    <ul className="mt-5 hidden space-y-2 text-left text-sm text-[#0f1b3d]/80 lg:block">
                        {[
                            "Personalized feed based on your interests",
                            "Save articles and build reading lists",
                            "Weekly digest from your favorite categories",
                        ].map((key) => (
                            <li key={key} className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#22c55e]/15 text-[#16a34a]">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <span>{key}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Right form card */}
                <section className="flex min-h-0 items-center justify-center py-2">
                    <div className="max-h-full w-full max-w-md overflow-y-auto rounded-2xl border border-[#0f1b3d]/10 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(15,27,61,0.35)] lg:p-7">
                        {submitted ? (
                            <div className="py-4 text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e]/15 text-[#16a34a]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="mt-4 font-serif text-xl font-bold">
                                    Welcome to Prism, {form.fullname.split(" ")[0]}!
                                </h2>
                                <p className="mt-2 text-sm text-[#0f1b3d]/70">
                                    Check your inbox at <strong>{form.email}</strong> to verify
                                    your account.
                                </p>
                                <a
                                    href="/"
                                    className="mt-5 inline-block rounded-lg bg-[#0f1b3d] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f1b3d]/90"
                                >
                                    Back to home
                                </a>
                            </div>
                        ) : (
                            <>
                                <h2 className="font-serif text-2xl font-bold">Create account</h2>
                                <p className="mt-1 text-sm text-[#0f1b3d]/60">
                                    Already have one?{" "}
                                    <a href="/profile" className="font-semibold text-[#16a34a] hover:underline">
                                        Sign in
                                    </a>
                                </p>

                                <form onSubmit={onSubmit} className="mt-4 space-y-3" noValidate>
                                    <Field
                                        label="Full name(optional middle name)"
                                        id="fullname"
                                        value={form.fullname}
                                        onChange={(v) => setForm({ ...form, fullname: v })}
                                        error={errors.fullname}
                                        placeholder="Peter Parker"
                                    />
                                    <Field
                                        label="Username"
                                        id="username"
                                        value={form.username}
                                        onChange={(v) => setForm({ ...form, username: v })}
                                        error={errors.username}
                                        placeholder="peterparker@123"
                                    />
                                    <Field
                                        label="Email"
                                        id="email"
                                        type="email"
                                        value={form.email}
                                        onChange={(v) => setForm({ ...form, email: v })}
                                        error={errors.email}
                                        placeholder="you@domain.com"
                                    />
                                    <Field
                                        label="Password"
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={form.password}
                                        onChange={(v) => setForm({ ...form, password: v })}
                                        error={errors.password}
                                        placeholder="At least 8 characters"
                                        trailing={
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((s) => !s)}
                                                className="text-xs font-semibold uppercase tracking-wide text-[#0f1b3d]/60 hover:text-[#0f1b3d]"
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        }
                                    />
                                    <Field
                                        label="Confirm password"
                                        id="confirm"
                                        type={showPassword ? "text" : "password"}
                                        value={form.confirm}
                                        onChange={(v) => setForm({ ...form, confirm: v })}
                                        error={errors.confirm}
                                        placeholder="Re-enter password"
                                    />

                                    <button
                                        type="submit"
                                        className="group relative w-full overflow-hidden rounded-lg border-2 border-[#22c55e] bg-[#22c55e] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#16a34a] hover:shadow-lg hover:shadow-[#22c55e]/30"
                                    >
                                        Create account
                                    </button>

                                    <div className="relative py-0.5 text-center">
                                        <span className="absolute inset-x-0 top-1/2 h-px bg-[#0f1b3d]/10" />
                                        <span className="relative bg-white px-3 text-xs font-semibold uppercase tracking-wider text-[#0f1b3d]/50">
                                            or
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#0f1b3d]/15 bg-white px-6 py-2.5 text-sm font-semibold text-[#0f1b3d] transition-colors hover:bg-[#0f1b3d]/5"
                                    >
                                        <svg viewBox="0 0 24 24" className="h-5 w-5">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z" />
                                        </svg>
                                        Continue with Google
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

function Field({
    label,
    id,
    value,
    onChange,
    error,
    placeholder,
    type = "text",
    trailing,   
}) {
    return (
        <div>
            <div className="flex items-baseline justify-between">
                <label htmlFor={id} className="block text-sm font-semibold text-[#0f1b3d]">
                    {label}
                </label>
                {trailing}
            </div>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`mt-1 w-full rounded-lg border bg-[#fcfbf8] px-4 py-2 text-[15px] text-[#0f1b3d] placeholder:text-[#0f1b3d]/35 outline-none transition-all focus:border-[#22c55e] focus:bg-white focus:ring-2 focus:ring-[#22c55e]/20 ${
                    error ? "border-red-400" : "border-[#0f1b3d]/15"
                }`}
            />
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
}

export default Register