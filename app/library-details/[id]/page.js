import connectDB from "@/app/config/database";
import Library from "@/app/models/libraries";
import LibraryItemMap from "@/app/components/LibraryItemOnMap";

const LibraryDetailsPage = async ({ params }) => {
  await connectDB();
  // indiivdual library will be the one associated to params in url
  const library = await Library.findById(params.id).lean();

  const serialisedLibrary = JSON.parse(JSON.stringify(library));

  if (!library) {
    return <div>Library not found</div>;
  }

  return (
    <div>
      <LibraryItemMap library={serialisedLibrary} />
      <h1>{library.name}</h1>
      <p>
        {library.street}, {library.town}, {library.city}, {library.postcode}
      </p>
      {library.image && <img src={library.image} alt={library.name} />}
    </div>
  );
};

export default LibraryDetailsPage;
