'use client'
import { HTTP_BACKEND } from "@repo/config/config";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useRef, useEffect, useState } from "react";
import Popup from "@repo/ui/Popup";

export default  function Dashboard(){
    const {push}=useRouter();
    const value = useRef<HTMLInputElement>(null);
    const [rooms, setRooms] = useState<{id:number, slug:string, createdAt:string,adminId:string}[]>([]);

    const [showpopup,setshowpopup]=useState(false);
    const [user , setUser]=useState({name:"",email:"",photo:""})



    useEffect(()=>{
        fetchRooms();
        fetchUser();
    },[]);

    async function fetchUser() {
        const userRes = await axios.get(`${HTTP_BACKEND}/me`, {
            headers: { authorization: `${localStorage.getItem("token")}` }
        });
        setUser({
            name: userRes.data.name,
            email: userRes.data.email,
            photo: userRes.data.photo
        });
    }

    async function fetchRooms(){
        const res = await axios.get(`${HTTP_BACKEND}/rooms`,{
            headers: { authorization: `${localStorage.getItem("token")}` }
        })
        // console.log(localStorage.getItem("token"))
        setRooms(res.data.rooms ?? res.data);
        console.log(res.data ?? res.data.rooms)
    }

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-12">
            <div className="pointer-events-none fixed inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, #171717 0px, #171717 1px, transparent 1px, transparent 80px),
                                      repeating-linear-gradient(90deg, #171717 0px, #171717 1px, transparent 1px, transparent 80px)`
                }}
            />

            <div className="relative w-full max-w-md flex flex-col gap-6">
                <div className="absolute -top-10 right-0 flex items-center gap-3">
                    <button
                        onClick={() => setshowpopup(true)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#171717] border border-[#171717] shadow-[3px_3px_0_#00E0C6] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#00E0C6] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#00E0C6]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00E0C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                        </svg>
                    </button>
                </div>


                <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-[6px_6px_0_#171717] p-8">
                    <div className="mb-8">
                        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#00E0C6]">
                            <span className="block h-0.5 w-5 bg-[#00E0C6]" />
                            Workspace
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-[#171717]">Create a room.</h1>
                        <p className="mt-2 text-sm text-[#6b7280]">Enter a room name to start collaborating in real-time.</p>
                    </div>
                    <div className="flex flex-col gap-2 mb-6">
                        <label htmlFor="room" className="text-xs font-semibold uppercase tracking-widest text-[#171717]">Room Name</label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h10v10H4zM14 14h6v6h-6zM4 18h6v2H4z"/>
                                </svg>
                            </div>
                            <input
                                id="room" type="text" placeholder="e.g. team-sprint-board" ref={value}
                                className="w-full rounded-xl border border-[#e5e7eb] bg-[#fafafa] py-3 pl-10 pr-4 text-sm text-[#171717] placeholder:text-[#9ca3af] outline-none transition-all focus:border-[#171717] focus:shadow-[3px_3px_0_#00E0C6] focus:bg-white"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-full cursor-pointer rounded-xl bg-[#171717] py-3.5 text-base font-semibold text-white shadow-[4px_4px_0_#00E0C6] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:bg-[#2d2d2d] hover:shadow-[5px_5px_0_#00E0C6] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#00E0C6]"
                        onClick={async () => {
                            await canvas(value.current?.value, push);
                            fetchRooms();
                        }}
                    >
                        Create Room &rarr;
                    </button>
                    <p className="mt-4 text-center text-xs text-[#9ca3af]">Share the room name with your team to collaborate instantly.</p>
                </div>

                {rooms.length > 0 && (
                    <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-[6px_6px_0_#171717] p-8">
                        <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#00E0C6]">
                            <span className="block h-0.5 w-5 bg-[#00E0C6]" />
                            Your Rooms
                        </div>
                        <div className="flex flex-col gap-3">
                            {rooms.map((room) => (
                                <div
                                    key={room.id}
                                    onClick={() => push(`/canvas/${room.id}`)}
                                    className="group flex items-center justify-between rounded-xl border border-[#e5e7eb] px-4 py-3 cursor-pointer transition-all hover:border-[#171717] hover:shadow-[3px_3px_0_#00E0C6]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E0C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 4h10v10H4zM14 14h6v6h-6zM4 18h6v2H4z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#171717]">{room.slug}</p>
                                            <p className="text-xs text-[#9ca3af]">{new Date(room.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <svg className="text-[#9ca3af] group-hover:text-[#171717] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-xl bg-[#00E0C6] opacity-20 -z-10" />
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-lg border-2 border-[#171717] opacity-10 -z-10 rotate-12" />
            </div>
            {showpopup && (
            <Popup
                user={user}
                onClose={() => setshowpopup(false)}
                onLogout={() => {
                    localStorage.removeItem("token");
                    push("/signin");
                }}
            />
        )}
        </div>
    );
}

async function canvas(value:any, push:any){
    const res = await axios.post(`${HTTP_BACKEND}/room`, { name: value }, {
        headers: { authorization: `${localStorage.getItem("token")}` }
    })
    // console.log(res);
}
