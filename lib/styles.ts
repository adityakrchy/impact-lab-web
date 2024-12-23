export const commonStyles = {
  pageContainer: "min-h-screen w-full px-4 md:px-6 lg:px-8 py-8",
  sectionContainer: "max-w-7xl mx-auto py-12 md:py-16 lg:py-20",
  heading: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6",
  subheading: "text-lg md:text-xl text-gray-600 mb-8 w-full",
  cardContainer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
  card: `
    bg-white rounded-xl shadow-md hover:shadow-xl 
    transition-all duration-300 overflow-hidden
    border border-gray-100 hover:border-gray-200
    backdrop-blur-sm bg-white/50
    hover:-translate-y-1
    relative
    before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-white/50 before:to-transparent 
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
  `,
  gradientOverlay: "bg-gradient-to-r from-black/50 to-transparent",
  button: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg transition-colors duration-300"
  }
}; 