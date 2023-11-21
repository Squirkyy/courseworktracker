function Page() {
    return (
        <>
            <div className="h-screen w-full flex flex-col items-center justify-center">
                <div>
                    <div className="flex w-full">
                        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Create from scratch</div>
                        <div className="divider divider-horizontal">OR</div>
                        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Create from template</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page;