initSidebarItems({"constant":[["DEFAULT_IMAGE_HANDLE",""],["SAMPLER_ASSET_INDEX",""],["TEXTURE_ASSET_INDEX",""]],"enum":[["DataFormat",""],["ImageFormat",""],["ImageSampler","Used in [`Image`], this determines what image sampler to use when rendering. The default setting, [`ImageSampler::Default`], will read the sampler from the [`ImageSettings`] resource at runtime. Setting this to [`ImageSampler::Descriptor`] will override the global default descriptor for this [`Image`]."],["ImageType","The type of a raw image buffer."],["TextureError","An error that occurs when loading a texture"],["TranscodeFormat",""]],"fn":[["dds_buffer_to_image",""],["dds_format_to_texture_format",""],["get_transcoded_formats",""],["ktx2_buffer_to_image",""],["ktx2_dfd_to_texture_format",""],["ktx2_format_to_texture_format",""],["ktx2_get_texture_format",""],["update_texture_cache_system","Updates the [`TextureCache`] to only retains recently used textures."]],"struct":[["CachedTexture","A cached GPU [`Texture`] with corresponding [`TextureView`]. This is useful for textures that are created repeatedly (each frame) in the rendering process to reduce the amount of GPU memory allocations."],["CompressedImageFormats",""],["DefaultImageSampler","A rendering resource for the default image sampler which is set during renderer intialization."],["FileTextureError","An error that occurs when loading a texture from a file."],["GpuImage","The GPU-representation of an [`Image`]. Consists of the [`Texture`], its [`TextureView`] and the corresponding [`Sampler`], and the texture’s size."],["HdrTextureLoader","Loads HDR textures as Texture assets"],["Image",""],["ImagePlugin","Adds the [`Image`] as an asset and makes sure that they are extracted and prepared for the GPU."],["ImageSettings","Global resource for [`Image`] settings."],["ImageTextureLoader","Loader for images that can be read by the `image` crate."],["PixelInfo","Information about the pixel size in bytes and the number of different components."],["TextureCache","This resource caches textures that are created repeatedly in the rendering process and are only required for one frame."]],"trait":[["BevyDefault",""],["TextureFormatPixelInfo","Extends the wgpu [`TextureFormat`] with information about the pixel."],["Volume","Used to calculate the volume of an item."]]});