type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <h1 className="flex justify-center rounded-xl transition delay-150 duration-300 hover:scale-102 bg-blue-200 pb-3 mb-5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {title}
      </span>
    </h1>
  );
}
