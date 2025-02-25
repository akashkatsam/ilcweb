import React, { useState, useEffect } from "react";
export default function Standing() {
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStandings = async () => {
            try {
                const response = await fetch('https://ilc-dev.katsammedia.com/api/resource/ILC%20Standings?fields=["*"]');
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                // Assuming API returns an array in `data.data`
                const sortedData = data.data.sort((a, b) => a.position - b.position);
                setStandings(sortedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchStandings();
    }, []);

    return (
        <section id="standing">
            <div id="table">
                {loading ? (
                    <p className="text-center text-white">Loading Standings...</p>
                ) : (
                    <table className="table table-striped table-bordered table-custom">
                        <thead className="custom-header">
                            <tr>
                                <th className="text-center">POS</th>
                                <th></th>
                                <th className="tablwidth1">Team</th>
                                <th></th>
                                <th className="text-center">PLAY</th>
                                <th className="text-center"> WIN</th>
                                <th className="text-center">LOSS</th>
                                <th className="text-center">RUN RATE</th>
                                <th className="text-center">D/L</th>
                                <th className="tablwidth text-center">Forms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standings.map((team, index) => (
                                <tr key={index}>
                                    <td className="text-center">{team.position}</td>
                                    <td>
                                        <img
                                            src={`https://ilc-dev.katsammedia.com/${team.team_logo}`}
                                            alt={team.team_name}
                                            height="50"
                                        />
                                    </td>
                                    <td className="text-left">{team.team_name}</td>
                                    <td></td>
                                    <td className="poppinstanding">{team.played || 0}</td>
                                    <td className="poppinstanding">{team.won || 0}</td>
                                    <td className="poppinstanding">{team.lost || 0}</td>
                                    <td className="poppinstanding">{team.draw || 0}</td>
                                    <td className="poppinstanding">{team.goal_difference || 0}</td>
                                    <td className="form-toss1">
                                        <ul className="d-flex">
                                            {team.form?.split("").map((f, i) => (
                                                <li key={i} className="form-toss">
                                                    <p>{f}</p>
                                                </li>
                                            )) || (
                                                <>
                                                    <li className="form-toss"><p>-</p></li>
                                                    <li className="form-toss"><p>-</p></li>
                                                    <li className="form-toss"><p>-</p></li>
                                                    <li className="form-toss"><p>-</p></li>
                                                    <li className="form-toss"><p>-</p></li>
                                                    <li className="form-toss"><p>-</p></li>
                                                </>
                                            )}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Custom CSS for vertical alignment */}
            <style jsx>{`
                .table-custom td {
                    vertical-align: middle !important;
                }
            `}</style>
        </section>
    );
}
