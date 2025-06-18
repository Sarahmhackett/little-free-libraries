import connectDB from "@/app/config/database";
import comments from "@/app/models/comment";

export async function GET(req, context) {
  const { params } = await context;
  const { libraryId } = params;
  await connectDB();

  try {
    const comment = await comments.find({ libraryId }).sort({ createdAt: -1 });
    return new Response(JSON.stringify(comment), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("DB error:", error);
    return new Response(JSON.stringify({ error: "Database error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
