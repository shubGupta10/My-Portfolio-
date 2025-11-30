export default function AdminHome() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Dashboard Overview</h2>
                <p className="text-muted-foreground">Select a section from the sidebar to manage content.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Quick Actions</h3>
                    <p className="text-sm text-muted-foreground">Manage your content efficiently</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Content Management</h3>
                    <p className="text-sm text-muted-foreground">Organize and update your content</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Analytics</h3>
                    <p className="text-sm text-muted-foreground">Track your performance</p>
                </div>
            </div>
        </div>
    );
}
