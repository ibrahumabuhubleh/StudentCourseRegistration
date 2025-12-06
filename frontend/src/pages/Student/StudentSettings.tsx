export default function StudentSettings() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="bg-white shadow-sm border rounded-xl p-6 space-y-6">

        <div>
          <h3 className="font-semibold text-gray-900">Notifications</h3>
          <label className="flex items-center gap-3 mt-2">
            <input type="checkbox" defaultChecked />
            <span>Email course updates</span>
          </label>
          <label className="flex items-center gap-3 mt-2">
            <input type="checkbox" defaultChecked />
            <span>New instructor messages</span>
          </label>
        </div>

        <hr />

        <div>
          <h3 className="font-semibold text-gray-900">Account</h3>
          <button className="text-red-700 font-semibold">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}
