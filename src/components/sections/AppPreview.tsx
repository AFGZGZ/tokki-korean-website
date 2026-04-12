export default function AppPreview() {
  return (
    <section className="py-20" id="preview">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            See the app in action
          </h2>
          <p className="text-gray-600">
            A simple and focused interface designed for effective learning.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-4 shadow-sm">
          <div className="bg-white rounded-xl p-6 min-h-[300px] flex flex-col gap-4">
            {/* Example content */}
            <div className="text-sm text-gray-500">Vocabulary Practice</div>

            <div className="text-3xl font-bold">학교</div>

            <div className="text-gray-600">What does this mean?</div>

            {/* Options */}
            <div className="grid gap-3 mt-4">
              <button className="border rounded-lg py-2 hover:bg-gray-50">
                School
              </button>
              <button className="border rounded-lg py-2 hover:bg-gray-50">
                Teacher
              </button>
              <button className="border rounded-lg py-2 hover:bg-gray-50">
                Book
              </button>
              <button className="border rounded-lg py-2 hover:bg-gray-50">
                Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
